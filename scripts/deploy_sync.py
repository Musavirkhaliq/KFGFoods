#!/usr/bin/env python3
import sys
import pexpect

HOST = "root@72.61.174.62"
PASSWORD = "Sukoonsphere@urfie098"
DEST = f"{HOST}:/var/www/kfgfoods/"

cmd = (
    "rsync -avz --delete "
    "--exclude 'node_modules' "
    "--exclude '.git' "
    "--exclude 'temp-app' "
    "-e 'ssh -o StrictHostKeyChecking=no' "
    "./ "
    f"{DEST}"
)

print(f"Running rsync: {cmd}")
child = pexpect.spawn(cmd, timeout=300)
i = child.expect([r'[pP]assword:', pexpect.EOF, pexpect.TIMEOUT])
if i == 0:
    child.sendline(PASSWORD)
    child.expect(pexpect.EOF, timeout=300)
    print(child.before.decode(errors='replace'))
    print("Rsync completed successfully!")
elif i == 1:
    print(child.before.decode(errors='replace'))
    print("Rsync completed without password prompt!")
else:
    raise TimeoutError("Rsync timed out")
