---
layout: post
title: Azure cost optimalization intro
---

### Introduction

I want to introduce by this post a whole series of blog posts covering some tips for the cost optimization which we can apply in the Azure Cloud. 

It's possible that you have already implemented all of my suggestions. In that case, good for you! Otherwise, you're still able to become a hero in your company, save some money which you have to pay for Azure's invoices, and spend it for some nice stuff like a new board game in your office or a corporate retreat. Or maybe you've heard that MS Azure solutions can make your software more reliable or code deployment into the Azure's App Service with conjunction with Azure DevOps is much simpler than your current CI/CD process, but after raw cost calculation, your boss declined your suggestion to use Azure because the cost of the cloud is too high? Hmm? Sounds familiar to you? If so, I invite you to read further. Those tips aren't secret knowledge and are easy to implement.

![Hero](https://raw.githubusercontent.com/rafalpienkowski/resources/master/azure-cost-opt/hero.png)

After this lengthy introduction, it is high time for specific advice. 
First of all, we need to answer two simple questions. Are you ready? Let's go with the first question.

### What licensing model do you have?

Depending on the model you've chosen, you can decrease the monthly cost of Azure. A short recap of available models and their brief description.

- [Pay-As-You-Go](https://azure.microsoft.com/en-us/offers/ms-azr-0003p/)
Most popular one. It's easy to set up. What we only need is an available credit card which will be bounded with our subscription. Every 30 days you will receive an invoice for used resources and necessary funds will be withdrawn from your credit card.  You're paying only for used resources. The nice thing is that upgrading from Azure Free Account to PAYG is easy.  And that's all. In this billing method, we don't have much room to reduce the cost.


- [Azure in Open (AIO)](https://azure.microsoft.com/en-us/offers/ms-azr-0111p/)
In this model, you're buying scratch cards from Microsoft partner. Each card is worth 100$. AIO is quite similar to the Pay-As-You-Go model. The difference is that you have to pay before we use the resource. We can save some money by buying scratch cards in bulk. Depending on your partner and the number of scratches you want to get you can negotiate the discount. In the AIO model, you have to activate the scratch in three years and use available resources in one year.


- [Cloud Solution Provider (CSP)](https://partner.microsoft.com/en-us/cloud-solution-provider)
The CSP works like the Pay-As-You-Go model. The main difference is that you're paying directly to the MS partner instead of Microsoft. Worth to mention is that our support tickets are going to the partner instead of Microsoft support.


- [Enterprise Agreement (EA)](https://azure.microsoft.com/en-us/pricing/purchase-options/enterprise-agreement/)
If your solution regularly consumes a significant amount of money (about 17 500 $/ year), you can try to go into the Enterprise Agreement model. In this model, you're buying access to the Azure from Microsoft's Partner. The EA is set up for a one or three year period. You're paying in advance for the given period (of course if you use bought resources before the end of the agreement, you can set up new agreement). Here you've got the greatest opportunities in discount negotiations. An interesting thing is you gain access to the new management portal (https://ea.azure.com/) instead of the *classic* one (https://portal.azure.com/).

Did you find your licensing model? I hope so. Now it's the time for the second question.

### What type of cloud environment are we using?
This is a quite fundamental question. Why? Because depending on the environment, type pricing plan is constructed and going further an invoice is created.  Let me do a  short recap of available cloud models and how they're related with "traditional" on-premise environment.

Main models:

- Infrastructure as a Service (IaaS)
I would say this is model could be treated as the first step into cloud computing. In short words, we're placing our Virtual Machine (VM) image into the cloud. We're responsible for i.a. O/S installation and maintenance required frameworks, runtime installation, and patching, etc. We have to care about many things, but we receive a low entry threshold. We can take our VM image and put it into the cloud. In the context of money saving, we should take a look at *Microsoft.Compute* pricing plan (we're billed based on the time we use the resource). I'll describe in details in the next episode.


- Platform as a Service (PaaS)
In this case, we are partially giving away the responsibility for the preparation and maintenance of our environment. For instance, all things related to the O/S and runtime are no longer our problem. The end with applying patches to our O/S. Now that is our vendor's problem. According to the Service Level Agreement (SLA) vendor ensures the availability of the platform. But we need to keep in mind that in the PaaS model we're losing some influence on the infrastructure itself and we have to adjust our solution to a given platform. According to Azure documentation: "Platform as a service (PaaS) is a complete development and deployment environment in the cloud." An example of such a resource in MS Azure is App Service or Azure SQL Database. Mainly in the PaaS model, we are paying for the whole time when the service is created, even if we are not using it. 


- Function as a Service (FaaS)
I'd say that this is a specific subset for PaaS. The responsibility for the Data and Application is moved to the vendor. For example, instead of writing a whole application to serve some HTTP request we can use Azure Functions. In that case, Microsoft takes care of the part responsible for calling our function when a request came to the server.


- Software as a Service (SaaS)
In the SaaS model, we're purchasing access to software. Excellent examples are Office 365 or Spotify. In short words, we're paying for the ability to use given a program for some time.

Below is the image comparing the mentioned models.

![On-Prem vs IaaS vs PaaS vs SaaS](https://raw.githubusercontent.com/rafalpienkowski/resources/master/azure-cost-opt/cloud-model.png)

With answers to the two main questions, we're ready for further steps. I hope you are not too bored. 

![Bored](https://raw.githubusercontent.com/rafalpienkowski/resources/master/azure-cost-opt/bored.png)

In the next episode, I'll describe how we can save some money consuming cloud in the Infrastructure as a Service model. I'll tell you how to reduce cost working with the Virtual Machines hosted in the Azure.

See you in the next episode!

P.S. All photos used in this post came from [unsplash.com](https://unsplash.com/).
