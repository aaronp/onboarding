# Product Onboarding

This is an example project for creating (onboarding) new products, which you can run [here](https://aaronp.github.io/onboarding/).

## Why Should I Care?

This is a micro-service project (there's a doc store, reference data service, user auth component, etc), but the whole thing is running here in this github repo alongside the code.

## I still don't get it

By having all the code running in the browser, you get immediate feedback on your whole system, so you can make more meaningful change which you can put in front of users.

The priority order always has to be:

 1) Build the right thing
 2) Build the thing right
 3) Operate/Run/Support the thing

Luckily, if you do #2 in the right way, that can help you ensure you're building the right thing (because you're doing it faster and with sound engineering practices which don't build up a lot of "[technical debt"](https://www.productplan.com/glossary/technical-debt/#:~:text=Technical%20debt%20(also%20known%20as,speedy%20delivery%20over%20perfect%20code.) or ["accidental complexity"](https://dev.to/alexbunardzic/software-complexity-essential-accidental-and-incidental-3i4d)

## How does it normally work?

Normally software has to be run someplace:
 * servers have to be provisioned/spun up to host/run the components
 * You need some kind of pipeline to build and deploy your software

These things take time and resource, and even if they can be done in minutes, that's orders of magnitude slower than milliseconds.

The time and complexity also multiplies per component -- one change or feature can affect several components in your system, so there are meetings, architecture diagrams, work tickets, deployments, testing, etc.


# Building This Project

The back-end for this project is [here](https://github.com/aaronp/onboarding-backend)

See [these notes](./docs/notes.md) for design decisions and further notes, or [here](./docs/building.md) if you're just interested in building it.
