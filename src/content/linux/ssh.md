---
title: "SSH — Secure Shell"
description: "Connect securely to remote Linux servers using SSH — the skill every DevOps Engineer uses daily."
order: 7
---

# SSH — Secure Shell

SSH (Secure Shell) is how DevOps Engineers connect to remote servers.

Every time you deploy to AWS, configure an Azure VM, or access a Kubernetes node, you use SSH.

---

# Learning Objectives

By the end of this lesson you will:

- Understand what SSH is and how it works
- Generate an SSH key pair
- Connect to a remote server using SSH
- Use SSH config to simplify connections
- Copy files securely with SCP

---

# How SSH Works

SSH creates an encrypted tunnel between your machine and a remote server.

```
Your Laptop
    ↓  (SSH client)
  Internet
    ↓  (Encrypted connection on port 22)
Remote Linux Server
    ↓  (SSH server / sshd)
Your terminal session
```

No password sent over the network. No plain text. Secure by default.

---

# SSH Key Pairs

SSH uses public/private key authentication.

- **Private key** — stays on your machine. Never share it.
- **Public key** — goes on the server. Safe to share.

When you connect, the server challenges your client to prove it holds the private key that matches the public key on file.

---

# Generate an SSH Key

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Accept the default location and set a passphrase when prompted.

This creates two files:

```
~/.ssh/id_ed25519        # private key — never share this
~/.ssh/id_ed25519.pub    # public key — copy this to servers
```

View your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

---

# Connect to a Remote Server

Basic syntax:

```bash
ssh username@server-ip
```

Example with Ubuntu on AWS EC2:

```bash
ssh ubuntu@54.123.45.67
```

Connecting with a key file (AWS EC2 `.pem` format):

```bash
ssh -i ~/.ssh/my-key.pem ubuntu@54.123.45.67
```

---

# Copy Your Public Key to a Server

```bash
ssh-copy-id ubuntu@54.123.45.67
```

After this runs, you can connect without typing a password.

---

# SSH Config File

Instead of typing long commands every time, create a config file:

```bash
nano ~/.ssh/config
```

Add an entry like this:

```
Host myserver
    HostName 54.123.45.67
    User ubuntu
    IdentityFile ~/.ssh/id_ed25519
```

Now connect with just:

```bash
ssh myserver
```

You can add as many hosts as you need.

---

# Copy Files Securely with SCP

Upload a file from your machine to a remote server:

```bash
scp localfile.txt ubuntu@54.123.45.67:/home/ubuntu/
```

Download a file from a remote server to your machine:

```bash
scp ubuntu@54.123.45.67:/var/log/app.log ./
```

Copy an entire folder:

```bash
scp -r ./myfolder ubuntu@54.123.45.67:/home/ubuntu/
```

---

# Common SSH Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| `Permission denied (publickey)` | Wrong key or no key copied | Run `ssh-copy-id` or check `-i` path |
| `Connection refused` | SSH not running or wrong port | Check server has `sshd` running |
| `Connection timed out` | Firewall blocking port 22 | Check security group or firewall rules |
| `Warning: Unprotected private key file` | Key file permissions too open | Run `chmod 400 ~/.ssh/id_ed25519` |

---

# Mini Lab

**Step 1** — Generate an SSH key pair on your machine:

```bash
ssh-keygen -t ed25519 -C "devops-practice"
```

**Step 2** — View your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

**Step 3** — Fix key permissions (always do this):

```bash
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/.ssh/id_ed25519.pub
```

**Step 4** — If you have an AWS EC2 or Azure VM, connect to it:

```bash
ssh -i ~/.ssh/your-key.pem ubuntu@YOUR-SERVER-IP
```

---

# Quick Knowledge Check

**Question 1**

Which file should you never share?

- `id_ed25519.pub`
- `id_ed25519`
- `config`
- `known_hosts`

Answer: **`id_ed25519`** — this is your private key.

---

**Question 2**

What port does SSH use by default?

- 80
- 443
- 22
- 3389

Answer: **22**

---

**Question 3**

Which command copies your public key to a remote server?

- `scp`
- `ssh-copy-id`
- `ssh-keygen`
- `chmod`

Answer: **`ssh-copy-id`**

---

# Summary

In this lesson you learned:

- SSH creates secure encrypted connections to remote servers
- SSH key pairs are more secure than passwords
- The SSH config file saves time when connecting to multiple servers
- SCP copies files securely between machines
- File permissions on your private key must be restricted

---

# Congratulations

You have completed the Linux section of the Ultimate DevOps Learning Hub.

You now have a solid foundation in:

- Linux fundamentals
- The filesystem
- File permissions
- Bash scripting
- Linux networking
- SSH remote access

**Next up: Git and GitHub**