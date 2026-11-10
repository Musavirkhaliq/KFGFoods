#!/usr/bin/env python3
import sys
import pexpect

HOST = "root@72.61.174.62"
PASSWORD = "Sukoonsphere@urfie098"

def run_remote(cmd, timeout=300):
    ssh_cmd = f"ssh -o StrictHostKeyChecking=no {HOST} {pexpect.split_command_line(cmd)}"
    child = pexpect.spawn(f'ssh -o StrictHostKeyChecking=no {HOST} "{cmd}"', timeout=timeout)
    i = child.expect([r'[pP]assword:', pexpect.EOF, pexpect.TIMEOUT])
    if i == 0:
        child.sendline(PASSWORD)
        child.expect(pexpect.EOF)
        output = child.before.decode(errors='replace')
        return output
    elif i == 1:
        return child.before.decode(errors='replace')
    else:
        raise TimeoutError("SSH command timed out")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: remote_exec.py <command>")
        sys.exit(1)
    cmd = " ".join(sys.argv[1:])
    try:
        out = run_remote(cmd)
        print(out)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
