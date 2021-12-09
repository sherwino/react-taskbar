# React Taskbar 

A desktop type environment built in react.

## Objective

The React Taskbar is a launcher that pulls in a series of apps and tools from other repos and lets you run them. Some of the tools or apps will be designed and implemented by @sherwino others are going to be designed by the open-source community. 

Here is the inspiration 😬

![Windows Taskbar](https://i.gyazo.com/4804e1584ad942efbe7dad29f89142e9.png)

### Currently

The initial implementation shows how you could create resizable and draggable windows. The app was created using create react app and more on those scripts can be seen [here](./docs/cra.md)

https://user-images.githubusercontent.com/2348227/140614400-09f3049c-3f48-45f6-9ebd-8542058481d2.mov


In future iterations the launcher will be able to add repos using a faux app store, where you can browse apps and install them, even add your own custom ones where you "add a repo" to the store, pick an icon, and a name for it.

### Pending

There is plenty to be done here but most of the work is going to be refactoring the existing implementation so that it could decorate the other apps. All the apps should be decorated and inherit all of the window / launcher capabilities.
