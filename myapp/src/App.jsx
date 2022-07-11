import React, { useEffect, useRef } from "react";
import * as monaco from 'monaco-editor';
import "./app.css"

export default function App() {
  const test = useRef(null)


  useEffect(() => {
    if(test){
      console.log("Loading Monaco...")
      let a = monaco.editor.create(test.current, {
        value: "#region VEXcode Generated Robot Configuration\nimport math\nimport random\nfrom vexcode_vr_enhanced_robot import *\n\ndrivetrain = Drivetrain()\nmagnet = Electromagnet(\"magnet\", 0)\npen = Pen()\nbrain = Brain()\nleft_bumper = Bumper(\"leftBumper\", 1)\nright_bumper = Bumper(\"rightBumper\", 2)\nfront_eye = EyeSensor(\"fronteye\", 3)\ndown_eye = EyeSensor(\"downeye\", 4)\nright_eye = EyeSensor(\"righteye\", 5)\nleft_eye = EyeSensor(\"lefteye\", 6)\nrear_eye = EyeSensor(\"reareye\", 7)\nfront_distance = Distance(\"frontdistance\", 8)\nrear_distance = Distance(\"reardistance\", 9)\nleft_distance = Distance(\"leftdistance\", 10)\nright_distance = Distance(\"rightdistance\", 11)\nlocation = Location()\npen.set_pen_width(THIN)\ndistance = front_distance\n#endregion VEXcode Generated Robot Configuration\n# ------------------------------------------\n# \n# \tProject:      VEXcode Project\n#\tAuthor:       VEX\n#\tCreated:\n#\tDescription:  VEXcode VR Python Project\n# \n# ------------------------------------------\n\n# Add project code in \"main\"\ndef main():\n    drivetrain.drive_for(FORWARD, 200, MM)\n\n# VR threads \u2014 Do not delete\nvr_thread(main)",
        language: 'python',
        folding:true,
        foldingImportsByDefault:true,
        showFoldingControls:"always",
        foldingStrategy:"indentation"
      })
      monaco.languages.registerFoldingRangeProvider("python", {
        provideFoldingRanges: function (model, context, token) {
          return [
            {
              start: 0,
              end: 2,
              kind: monaco.languages.FoldingRangeKind.Region
            },
          ];
        }
      })
      a.getAction("editor.foldAllMarkerRegions").run()
    }
  }, [])
    
    
  return <div id="container" ref={test}></div>;
}