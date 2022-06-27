---
sidebar_position: 10
title: 概述
---



QingCloud IoT 物联网平台 是一种用于 构建和管理物联网解决方案的数字平台 。
基于云原生构建核心构架tkeel，利用Dapr 实现语言无关性，最低成本与现有功能集成，通过插件机制实现业务扩展与模块化交付，对设备生成的数据进行收集、处理、分析和操作
，帮助企业用户提供可落地、可迭代、面向场景的综合物联网解决方案，加速行业应用场景的数字化转型，构建产业数字经济；


## 平台介绍

![img.png](/images/tkeel/system_architecture.png)

QingCloud IoT 物联网平台作为高扩展、可插拔的开源 IoT PaaS +  平台，
除了提供基于云原生的多租户、可拔插的物联网运营平台 SaaS 服务供普通物联网用户使用，快速连接设备，构建用户场景。
同时也可以让开发者方便的为更多场景创建解决⽅方案，技术供应商可与物联⽹网 PaaS 合作以接触更更⼴广泛的客户，
制造商可以更更快速对接市场，降低总成本。

tKeel 平台基于多租户架构设计。多租户是一种软件架构技术，是实现如何在多用户环境下（此处的多用户一般是面向企业用户，因此抽象出租户的概念，租户就可以理解为一个用户空间的意思）
共用相同的系统或程序组件，并且可确保各用户间数据的隔离性。

平台默认用户有：系统管理员、租户管理员以及租户用户。

- 系统管理员：负责管理平台系统的人员，有管理插件、设置平台、管理租户等权限。
- 租户管理员：系统管理员创建租户空间时默认创建一个租户管理员，租户管理员可以管理租户空间内的用户，用户权限，权限分配。
- 租户用户：负责具体的功能使用。

整个平台的功能分为两个部分，一个是系统管理员使用的管理平台，以及租户管理员和租户用户使用的租户平台。



## 管理平台

管理平台作为运维平台供系统管理员使用，主要功能有插件管理、租户管理、平台设置、服务监控等功能。
- 插件管理功能包括新增插件源、安装插件、卸载插件、升级插件。
- 租户管理功能包括新增租户空间、删除租户空间、租户管理员重置。
- 平台设置功能包括设置平台配色、设置Logo、图标、登录页面等功能。

## 租户平台

租户平台作为分配给具体的租户使用。
- 租户管理员负责启用插件、停用插件。
- 租户管理员负责管理角色、角色权限以及分配角色给对应用户。
- 租户管理员以及租户用户使用插件的各种能力共同构建业务系统所要的各类功能。