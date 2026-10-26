---
title: "Suthep: making Docker deployments easier to manage"
description: "A look at Suthep, a CLI for Docker deployments, Nginx reverse proxy, and HTTPS on projects that need a simpler start."
date: 2026-10-27
---

Getting a project onto a server involves more than making the app run. There is also Nginx, HTTPS, domains, and keeping deployments up to date. Suthep grew from that problem: making Docker deployments easier to manage for smaller projects, without setting everything up by hand each time.

## Bringing the deployment pieces together

Suthep is a CLI that connects the deployment steps: managing Docker containers, configuring an Nginx reverse proxy, and enabling HTTPS through Certbot. It also supports multiple domains or subdomains and health checks for services.

The interesting part of this problem is how the pieces depend on one another: the app runs in a container, Nginx routes requests to the right service, and HTTPS needs to match the configured domain. When these are managed separately, changing one value can mean tracking down several files.

Suthep uses YAML as the place to bring project settings together. The goal is not to hide how a server works, but to make the values for a project readable and reviewable in one place. It also makes settings reusable rather than relying on steps remembered from the last deployment.

Designing a CLI for this work means thinking about both the values a user provides and their effects on the server. Commands should make the desired services clear, while the tool coordinates Docker, Nginx, and Certbot as implementation details.

## Updates without taking the service offline

Releasing a new version should not mean users encounter an unavailable service. Suthep supports zero-downtime deployments to make version changes smoother, alongside the related reverse proxy and HTTPS setup.

This makes deployment more than simply starting a container: the service's state during a version change matters too. Health checks help verify that a service responds, while Nginx connects requests from a domain to that service. Treating these as one workflow makes the relationship between steps easier to see.

## Scope and lessons

Supporting multiple domains, HTTPS, health checks, and updates without downtime gives the tool a wider scope than a wrapper around Docker. Those capabilities also make it important to keep configuration understandable. YAML provides a clear way to declare what is needed without adding a setup UI or an external service.

The lesson from this problem is that a deployment tool should reduce repeated work without hiding what it manages. Keeping the process simple and inspectable matters as much as shortening the deployment command.

## What Suthep aims to do

- Manage Docker deployments through a CLI
- Configure an Nginx reverse proxy and HTTPS with Certbot
- Support multiple domains, health checks, and zero-downtime deployments
- Define project settings in YAML

## Tech stack

- TypeScript
- Docker
- Nginx
- Certbot
- YAML

Suthep is written in TypeScript and published as an open-source project. See the code on [GitHub](https://github.com/dukerspace/suthep) or visit the [Suthep project page](https://dukerspace.com/projects/suthep).
