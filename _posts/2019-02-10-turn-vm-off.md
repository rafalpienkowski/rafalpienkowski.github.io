---
layout: post
title: Turn VM off and give my money back
---

# Introduction

In the previous episode, I get familiar with payment methods and cloud model which are available in Azure. Now I'm going to take a closer look to cost optimization of Virtual Machines (VM), which are in my opinion, the base of IaaS.


### Virtual Machine

First of all, you need to know that a "typical" Virtual Machine in the Azure consists of several components:

- storage account - is used for backups/snapshots and the disk for the VM
- disk - optional disk which could be attached to the VM
- virtual machine 
- network interface - enables the VM to communicate with virtual network
- network security group - is used to allow or deny network traffic to the VM

![VM](https://raw.githubusercontent.com/rafalpienkowski/resources/master/azure-cost-opt/vm.png)


You must keep in mind that "typical" VM is, in fact, a combination of several elements. Why it's so important? Only in the case of VM itself, the fees are calculated for every second it's being used. When the VM is down no charges are applied. So what that gives to us? The answer is simple. Shut down your VM when you don't need it. For instance, if we have a VM dedicated for the dev team. It could be taken down during off hours. I don't mean to go to the Azure portal once or twice a day and doing it manually. Oh no, this isn't my intention. We should automatize our job as far as it's possible. [Azure Automation](https://azure.microsoft.com/en-us/services/automation/) comes with help. You don't have to have expert knowledge to do that. You can do it by clicking in the Azure Portal. The article: [Start/Stop VMs during off-hours solution in Azure Automation](https://azure.microsoft.com/en-us/services/automation/) is an excellent starting point.

![Azure Scheduler](https://raw.githubusercontent.com/rafalpienkowski/resources/master/azure-cost-opt/azure-scheduler.jpg)

The scheduler available in the Azure portal isn't perfect. Available schedule options are one time, monthly, weekly, daily, hourly. It isn't enough to shut down our VM during the weekends or national holidays. Fortunately, we can write our own runbooks and customize the scheduler's behavior. [Here](https://blog.kloud.com.au/2016/03/16/add-workdays-and-public-holidays-to-your-azure-automation-runbooks/) is an example. The nice thing is that we can automate the schedule creation as well. To do that we need to use Azure Resource Manager (ARM) template. ARM is a topic for a separate post, so, for now, I'll only give a link to the [Deploy an Azure Resource Manager template in an Azure Automation PowerShell runbook](https://docs.microsoft.com/en-us/azure/automation/automation-deploy-template-runbook) article for interested. 

So let's calculate possible saving resulting from switching of the VM. For the calculation, I took DS3 V2 VM (O/S Windows), and I assumed that the VM would be running every working day for 13 hours. In an average month has 23 working days, so we have 299 hours. The table below compares the cost of the VM working 24/7 with the VM running only during work hours. In short, we can save more than 200$ monthly. 

![VM pricing](https://raw.githubusercontent.com/rafalpienkowski/resources/master/azure-cost-opt/vm_pricing.png)

But what in case, when our VM have to work 24/7? After all, this is not an unusual case. In that scenario, [Azure Reserved VM Instances (RIs)](https://azure.microsoft.com/en-us/pricing/reserved-vm-instances/) comes into play. 

![Reserved](https://raw.githubusercontent.com/rafalpienkowski/resources/master/azure-cost-opt/reserved.jpg)

How RI works? We are requesting VM for a specific time (one or three years) and paying in advance for it. In the case of DS3 v2 (Windows), VM mentioned earlier, reserving it for one year gives us ~35% savings (~45% when reserved for three years). The exciting part is that taking VM with Linux O/S gives us more benefits (~40% and ~59% respectively).  

Other benefits of RI:
- VM which is bought in RI doesn't have to work 24/7
- we can exchange VM types within RI
- VM ordered as Reserved Instance may work longer that RI duration
- we can anytime cancel RI order, but we have to keep in mind that Microsoft will charge a fee of 12% of unused funds

For those, who already have a license with the Software Assurance for MS Windows Server or MS SQL Server, [Azure Hybrid benefit](https://azure.microsoft.com/en-us/pricing/hybrid-benefit/) could be an exciting option. It's based on the *bring your own license (BYOL)* model. In short, you already have a license which you could use on your on-prem environment. This license could be used in the Azure cloud environment and thereby we don't have to pay twice for the same. The azure Hybrid benefit can save up to 40% of VM's costs. 


### Summary

That will be all for now. In the next episode, I'm going to focus on components of the Platform as a Service model (App Service and Azure SQL Database). 

See you in the next episode.

P.S. All photos used in this post came from [unsplash.com](https://unsplash.com/).
