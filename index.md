---
layout: default
---

## Welcome!

You can find some information about myself and some post which I've posted on [dev.to](https://dev.to/rafalpienkowski).

### My articles

<ul>
{% for post in site.posts %}
   <li>
      <a href="{{ post.url }}">{{ post.title }}</a> ({{post.date | date: "%m/%Y"}})
   </li>
{% endfor %}
</ul>

### Discussions

- [Do we need standup?](https://dev.to/rafalpienkowski/do-we-need-stand-up-h19) (08/2018)
- [Can you share your favorite quote or rule related to IT?](https://dev.to/rafalpienkowski/can-you-share-your-favorite-quote-or-rule-related-to-it-4e7l) (06/2018)
- [Which framework use for an e2e tests of an SPA? ](https://dev.to/rafalpienkowski/which-framework-use-for-an-e2e-tests-of-an-spa--4bni) (03/2018
- [Do developers still need UML?](https://dev.to/rafalpienkowski/do-developers-still-need-uml-ajh) (11/2017)

### Projects

- [dCommerce](https://github.com/rafalpienkowski/d-commerce). Simple distribute system build with MassTransit framework.
- [Team Management System](https://github.com/rafalpienkowski/team-management-system). Management system for a basketball team. Main aim of this project was to get familiar with Blazor framework.
- [Build Trigger](https://github.com/rafalpienkowski/build-trigger). This project has been made to allow multiple users to trigger a build defined in Visual Studio Team Services (VSTS).
- [Warsaw 19115 Nofification System Explorer](https://github.com/rafalpienkowski/warsaw-19115-notifications). A simple project with consumes data from 19115 Warsaw's Notification service and presents it to the client. Nothing fancy.

### Presentations

- [In this repository](https://github.com/rafalpienkowski/presentations) you can find my presentations.

### Github

My personal [Github](https://github.com/rafalpienkowski) repositories.
