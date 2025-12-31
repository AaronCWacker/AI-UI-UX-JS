import js  # For DOM access
await micropip.install("numpy")

print("Hello from Python!")
js.document.getElementById('output').textContent = "Python executed successfully."

# Example with library (uncomment after loading in runner)
import numpy as np
print(np.array([1, 2, 3]))
