---
layout: post
title: GitHub & Docker Hub a reasonable marriage
---

Some time ago I posted an article about configuring [CI/CD with Wercker](/posts/2018/03/CI-CD-with-Wercker). 

Now I decided to try out a Docker Hub's automated build functionality. I need to say that I'm positively surprised. It's easy and can be useful in some scenarios. 

The option for an "Automated Build" is a bit hidden after "Create" button, but the whole process of creation of a new Docker Hub automated build is easy and can see in the picture below:

![Automated build creation](https://raw.githubusercontent.com/rafalpienkowski/resources/master/github-docker-hub-marriage/creation.gif)

_Notice:_ As you can see there is an option to take a Bitbucket repository too.

The process ends with an automated build instead of a repository. Compared to a repository automated build contains more options:
- Dockerfile
We can see what docker file has been used
- Build Details
We have the history of our builds. We can also look into details of every build. Additionally, we have a link to the GitHub repository with source code.
- Build Settings
We can change the image's tag depending on source code branch, trigger build manually or set up a build trigger depending on a tag in the source code.

![Automated build tabs](https://raw.githubusercontent.com/rafalpienkowski/resources/master/github-docker-hub-marriage/dashboard.png)

By default, the build will be triggered after every commit to the master branch on the GitHub. It takes some time to start a build and publish an image into our repository. The whole setup of an automated build ends with proper Dockerfile creation. Dockerfile can be tested on our local machine before we make a commit into the GitHub repository.

In my opinion, copying README.md file from GitHub and pasting it into Full Description in the Repo info tab is the killer feature. I love it.

### Does it cover all requirements? 
___

The simple answer is no. Sorry, but in my opinion, the functionality doesn't meet all expectations for a production-ready solution. For instance, we couldn't set up a CI workflow with steps containing build, unit and integration tests and deploy to a repository which is crucial nowadays.

### For whom the functionality is dedicated?
___

I think that for any Proof of Concept (PoC) project, a side project which can be developed separately or in case we need to prepare some dedicated docker images for our use.

### Last words
___

That is my subjective opinion. Feel free to disagree with me. I'm also interested in your opinion especially if you took advantage of that functionality. If you have any other ideas for usage of this functionality, give your suggestion in the comments.
