# How It Started

## The problem
Originally the Knowledge Grid was part of a big vision meant to solve a big problem: Computable biomedical knowledge (CBK) was being produced by biomedical and health care researchers at an ever increasing rate and the volume and complexity was rapidly becoming intractable. CBK, in it's various forms, was *hard* to implement and *slow* to move from research into practice. The heterogenous nature of health care information systems made it impossible to achieve economies of scale. And CBK was difficult to discover, update, and trust; organizing and managing CBK was largely left as an exercise for the reader.

It was proposed that any significant improvement would require novel infrastructure, widely available, to allow CBK to be managed and deployed rapidly, at scale, with trust. The Knowledge Grid was one such infrastructural platform.

## First steps

The original Knowledge Grid (KGrid) was a monolithic web application that allowed Knowledge Objects (KOs; conceptually a collection of digital artifacts) to be created, stored, and retrieved...and for their implementation (payload; code) to be executed. The code itself (as source files) and metadata describing the KO were stored as individual nodes in a Fedora Commons RDF repository. KGrid was an Online editor, source code repository, discovery service, python runtime environment, and web API for interacting with running code from KO payloads.

The original application combined all these responsibilities into a single platform but it was complicated. It was an old-style web app that needed a separate app server, the Fedora Commons install was complicated and hard to maintain with a lot of moving parts. The Jython environment was stuck at Python 2.8. Fedora Commons was a poor match for software source control use cases. THere was no clear path to adding additional runtime environments. These and other problems made the platform quite difficult to use.

But it was a very successful proof-og-concept. We learned a lot and began to plan the next phase of KGrid.

## What we learned

### CBK is dual-natured

Sometimes CBK is just another digital resource. It is created, published, disseminated, organized, modified. Like most born-digital artifacts, a KO can be freely replicated, uploaded and downloaded, converted between formats, and saved in a variety of systems along with other, related artifacts. Modern data storage systems and the systems built on top of them provide tons of cool capabilities. Every user community has its own needs, workflows, and metadata for CBK. 

At other times, we want to treat the CBK as ready-to-run code implementing a function, application, API, library...all the stuff of modern tech stacks. We want code standards and formats that make it easy to install or deploy. We want automated handling, verification and versioning. We want reliability and robustness. As with the "resource" side, every technical deployment has its own workflows and specific requirements.

With the right combination of artifacts and formats for payloads, metadata, configuration, and packaging, we started to piece together how a KO could support both views at the same time, and do so without getting in the way of the specific needs of different stakeholders, which led to the second light-bulb...

### Repositories and runtimes don't belong together

Given this dual nature of CBK, it is important to realize that the use cases for repositories include archiving, identity, provenance, discovery, asset management, annotation, dissemination, and other aspects of organizing and management "knowledge as a resource". This static, artifact-centric view of CBK is well-aligned with typical informatics use cases on the knowledge management side (hi, librarians!), and there is *a lot* of ground to cover.

Implementing and running code, deploying and accessing networked services is squarely withing the realm of the software system design side of informatics. The concerns for "knowledge as a service", the architectural choices, and even vocabulary is really quite different. We needed to split our infrastructure to better reflect the *resource* and *service* sides of CBK. 

# So we split things up (*Library* vs. *Activator*)

And in doing so we learned something else....

## The *package* is the boundary for CBK

One way to characterize the collection of artifacts that taken together represent a particular example of CBK is as a *compound digital object (CDO)*. A CDO is a pretty general concept, lending itself particularly well to RDF/graph repository representations. Everything can be a container or a binary, and metadata in the form of RDF triples can be used to represent the relationships between the parts of a CDO, other nodes in the same graph, and external, linked entities. 

We started down this path by storing every component binary or file within a KO as it's own node within an RDF datastore (including compiled binaries, source code, configuration data, supporting material, etc.) 

But once we separated the KGrid Library (for finding and showing KOs) and the Activator (for getting payloads running) we found the Fedora Commons repo to be way too heavy for the simpler case of managing a "Shelf" of KOs cached locally and ready to be run by an activator. A simple collection of artifacts on the local filesystem was a better fit. The RDF representation was serialized as JSON-LD metadata file (based on the existing Fedora Commons serialization format for RDF containers). Interoperability was maintained.

Having two different components that used a common entity, the KO, and the addition of import/export capabilities for these common "Shelf" formats, lit up another bulb. We realized there was a lot of value in having a consistent way to represent payload files, service description, deployment configuration, and metadata in RDF format, and the **KGrid Packaging Spec** was born.

## What else did we learn?

HAving a separate component to play with, we started to focus more deeply on the *Activation* of CBK. We implemented a wider variety of CBK which put a lot of demands on our techniques for creating and deploying payloads in different runtime environments.

### Going from K -> K' is *hard*

The needs of CBK creators were a really important consideration. Researchers often produce "computable" results (models, algorithms, functions in code, even spreadsheets). These, even when there are a primary research result, are meant to supplement the published results and discussion. This is part of what makes it difficult to replicate some research — the code is a snapshot of the evolving research understanding and will usually include many assumptions, workarounds, and gaps. (It may also be written by inexperienced programmers with domain knowledge but with less familiarity with software development). The CBK produced at the end of the research pipeline is seldom ready for practice at scale.

We began to develop a process of deep domain discovery combined with skillful application of a wide variety of modern software development practices in order to move from **K** (the result of the research or other deliberative process) to what we denote as ***K'*** (computable knowledge suitable for deployment at scale). We are still uncovering better ways to do this.

### Going from **K'** to practice is hard

A well-designed, well-described, well-organized, packaged KO (or set of KOs) still does nothing until it is deployed in a suitable runtime environment and exposed to client systems for use. Two things became clear: 
* The simple RESTful services exposed by KO payloads running in the embedded Activator runtime were usable, and the cost of deploying an Activator was manageable
* This was not enough for many real-world use cases and many types of CBK.

SMART apps, Web UIs, batch processes, Javascript, Node.js, RESTful APIs, event-driven reactive APIs, KOs and library code with direct invocation, container and cloud deployments. The combination of clients, code, communication, and platforms is as extensive as the full spectrum of modern health-care IT systems.

# So we split things up some more (Adapters and Runtimes) 

This move allowed us to uncouple the KO lifecycle (with the Activator as on reference implementation) from the particular demands of real-world CBK and particular use cases. A new contract emerged as we learned:

> **To move from K => K' there must be:**
>
> 1. A *runtime* suitable for running the *payload* (specified by the deployment metadata in the KO) 
>
> 1. An *adapter* that can deploy the *payload* to the *runtime* (using the deployment metadata in the KO) 
>
> 1. An *adapter* that can expose the capabilities of the *payload* (the API or interface specified by the service description on the KO) to clients

***The developer/implementor of the KO is responsible for identifying or creating a suitable adapter and runtime!***

The Activator supplies a couple of these by default:

* An embedded *Javascript* runtime (initially the Nashorn engine, now the GraalVM V8 engine) and adapter. This runtime is suitable for a wide range of simple, stateless CBK and executive (or *controller*) KOs
* The *Resource* adapter, which allows payload artifacts to be served to clients as static resources (e.g. data or client code to be run in the browser)
* The *Proxy Adapter* which implements a simple registration and message protocol which external runtimes can implement to handle parts 2. and 3. of the 

We dropped the embedded Python runtime in faveor of an external Python runtime environment that uses the proxy adapter to interact with the Activator

## What we learned

### Sometimes you need multiple KOs to implement CBK, sometimes you don't

### A single KO can contain multiple functions (API endpoints)

### A single function (or API endpoint) can have mutiple implementations





