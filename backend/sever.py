import os
import subprocess

# List of flowchart Mermaid.js code
flowcharts = [
    """
flowchart TD
    subgraph React Frontend Browser
        A1[Capture Video Stream<br>getUserMedia API] --> A2[Virtual Camera Protection]
        A2 --> A3[Send Verified Frame to Backend]
    end

    subgraph Flask Backend
        B1[Receive Frames from Frontend] --> B2[Face Detection YOLOv5]
        B2 --> B3[Bounding Boxes]
        B3 --> B4[IOU Scaling Bounding Box Refinement]
        B4 --> B5[Feature Extraction EffNet + ResNet]
        
        %% Include FT Generator, Minifas Net, and MultiNet in the processing steps
        B5 --> B6[Feature Transformation FT Generator]
        B6 --> B7[Face Detection Minifas Net]
        B7 --> B8[MultiNet for Enhanced Detection]
        
        B8 --> B9[Anti-Spoofing Detection Multiple Models]
        B9 --> B10[Ensemble Method for Real vs Spoofed]
        B10 --> B11[Focus on Spoof Detection Additional Checks]
        B11 --> B12[Active Liveness Detection If needed]
        B12 --> B13[Deepfake Detection]

        %% Face Matching Logic
        B13 --> B14[Face Matching MultiNet]
        B14 --> C1[Is Face Real]
        C1 -->|Yes| C2[Face Matching DeepFace]
        C1 -->|No| B15[Stop Face Matching]

        subgraph Face Matching Loop
            C2 --> C3[Loop Verification within 100ms]
            C3 -->|Matched| C4[Proceed to Final Decision Real / Spoofed]
            C3 -->|Not Matched| B15
        end
    end

    A3 --> B1
    C4 --> A4[Display Final Results on UI<br>Bounding Boxes + Label]
,
"""    ]

# Output directory for generated files on your PC
output_dir = "G:/flowchars_output"  # Update with your desired path

# Ensure the output directory exists
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Path to the mmdc executable
mmdc_path = "C:/Users/vibud/AppData/Roaming/npm/mmdc.cmd"  # Update this path as needed

# Loop through each flowchart and create a corresponding Mermaid.js file
for i, flowchart in enumerate(flowcharts):
    # Write Mermaid.js content to a file
    mermaid_file = os.path.join(output_dir, f"flowchart_step_{i+1}.mmd")
    with open(mermaid_file, "w") as f:
        f.write(flowchart)
    
    # Command to generate a PNG image using Mermaid CLI
    output_image = os.path.join(output_dir, f"flowchart_step_{i+1}.png")
    try:
        subprocess.run([mmdc_path, "-i", mermaid_file, "-o", output_image, "--width", "800"], check=True)
        print(f"Flowchart {i+1} generated as {output_image}")
    except subprocess.CalledProcessError as e:
        print(f"Error generating flowchart {i+1}: {e}")

print("All flowcharts generated successfully.")
