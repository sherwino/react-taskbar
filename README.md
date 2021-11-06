# React Taskbar 

A desktop type environment built in react.

## Objective

The React Taskbar is a launcher that pulls in a series of apps and tools from other repos and lets you run them. Some of the tools or apps will be designed and implemented by @sherwino others are going to be desgned by the open-source community. 

### Currently

The initial implementation shows how you could create resizable and dragable windows. The app was created using create react app and more on those scripts can be seen [here](./docs/cra.md)

// Insert screen cap here

In future iterations the launcher will be able to add repos using a faux app store, where you can browse apps and install them, even add your own custom ones where you "add a repo" to the store, pick an icon, and a name for it.

### Pending

There is plenty to be done here but most of the work is going to be refactoring the existing implementaton so that it could decorate the other apps. All the apps should be decorated and inherit all of the window / launcher capabilities.