---
title: "Linux Networking"
description: "Learn how Linux systems communicate over a network and practice essential networking commands."
order: 7
---

# Linux Networking

Imagine a server that cannot communicate with another server.

No websites.

No Docker pulls.

No GitHub access.

No Kubernetes cluster.

Networking is what allows computers to communicate.

As a DevOps Engineer, you'll troubleshoot networking issues almost every day.

---

# 🎯 Learning Objectives

By the end of this lesson you will:

- Understand what networking is
- Learn IP addresses
- Learn hostnames
- Test connectivity
- Display network interfaces
- Inspect routing information
- Diagnose network problems

---

# What is Networking?

Networking is simply communication between computers.

Think of it like sending a letter.

```
You
↓

Your Computer
↓

Network

↓

Another Computer
```

Without networking, cloud computing wouldn't exist.

---

# Your IP Address

Every computer has an address.

View yours:

```bash
hostname -I
```

Example:

```text
172.28.192.1
```

This identifies your computer on the network.

---

# View Your Hostname

```bash
hostname
```

Example:

```text
Nkydigitech
```

A hostname is simply the computer's name.

---

# View Network Interfaces

Run:

```bash
ip addr
```

You'll see something similar to:

```text
lo
eth0
wlan0
```

Common interfaces:

| Interface | Meaning |
|-----------|---------|
| lo | Loopback |
| eth0 | Ethernet |
| wlan0 | Wireless |

---

# Display IP Configuration

Another useful command:

```bash
ip a
```

This is a shorter version of:

```bash
ip addr
```

---

# Test Connectivity

Ping Google's DNS server.

```bash
ping 8.8.8.8
```

You should see replies similar to:

```text
64 bytes from 8.8.8.8
```

Stop pinging with:

```
Ctrl + C
```

---

# Test DNS Resolution

Now test a domain name.

```bash
ping google.com
```

If this works, DNS is functioning correctly.

---

# View Routing Table

Run:

```bash
ip route
```

Example:

```text
default via 192.168.1.1
```

The routing table tells Linux where to send network traffic.

---

# Check Active Connections

Run:

```bash
ss -tuln
```

This displays listening ports and network connections.

Useful for troubleshooting applications.

---

# Download Files

Use:

```bash
curl https://example.com
```

or

```bash
wget https://example.com
```

These commands are commonly used in automation scripts.

---

# Real DevOps Example

Imagine deploying a web application.

Your deployment fails because the server cannot reach GitHub.

The first thing you check is:

```bash
ping github.com
```

If networking is broken, nothing else matters.

---

# 🧪 Hands-on Lab

Run the following commands one by one.

```bash
hostname

hostname -I

ip addr

ip route

ping 8.8.8.8

ping google.com
```

Observe the output carefully.

Press **Ctrl + C** to stop each ping command.

---

# Expected Results

You should be able to identify:

- Your hostname
- Your IP address
- Your active network interface
- Your default gateway
- Successful ping replies

---

# 💡 DevOps Tip

Whenever something "doesn't work,"

Always ask:

> Is it a network problem?

Many production incidents begin with networking issues.

---

# ⚠ Common Beginner Mistakes

### Mistake 1

Assuming Wi-Fi is connected.

Always verify with:

```bash
ip addr
```

---

### Mistake 2

Ignoring DNS.

If:

```bash
ping 8.8.8.8
```

works,

but

```bash
ping google.com
```

fails,

your DNS configuration is probably the issue.

---

# Quick Quiz

## Question 1

Which command shows your hostname?

- pwd
- hostname
- whoami

✅ Answer:

hostname

---

## Question 2

Which command displays your IP address?

- hostname -I
- mkdir
- ls

✅ Answer:

hostname -I

---

## Question 3

Which command tests connectivity?

- ping
- touch
- chmod

✅ Answer:

ping

---

# 🚀 Mini Challenge

Find:

- Your hostname
- Your IP address
- Your default gateway
- Your active interface

Write them down before moving to the next lesson.

---

# Congratulations!

You now understand the networking fundamentals used by Linux servers around the world.

In the next lesson, you'll learn SSH and remotely connect to Linux machines—the same way DevOps engineers manage cloud servers every day.