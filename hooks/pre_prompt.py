import sys
import subprocess

def is_Pnpm_installed() -> bool:
    try:
        subprocess.run(["pnpm", "--version"], capture_output=True, check=True)
        return True
    except Exception:
        return False

if __name__ == "__main__":
    if not is_Pnpm_installed():
        print("ERROR: Pnpm is not installed.")
        sys.exit(1)