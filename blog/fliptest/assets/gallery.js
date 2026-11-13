window.GALLERY = [
 {
  "id": "box",
  "title": "Box at the desk edge",
  "desc": "The box overhangs the edge slightly less (A) or slightly more (B) than half its width.",
  "split": "sim",
  "members": [
   {
    "img": "img/box_A.jpg",
    "gt": "stay",
    "gtvid": "vid/box_A_gt.mp4"
   },
   {
    "img": "img/box_B.jpg",
    "gt": "fall",
    "gtvid": "vid/box_B_gt.mp4"
   }
  ],
  "models": [
   {
    "name": "Gemini Omni Flash 1.1",
    "pred": [
     "fall",
     "fall"
    ],
    "vid": [
     "vid/box_omni-flash-1.1_A.mp4",
     "vid/box_omni-flash-1.1_B.mp4"
    ]
   },
   {
    "name": "MiniMax-H3",
    "pred": [
     "fall",
     "fall"
    ],
    "vid": [
     "vid/box_minimax-h3_A.mp4",
     "vid/box_minimax-h3_B.mp4"
    ]
   },
   {
    "name": "Wan2.2-I2V-A14B",
    "pred": [
     "fall",
     "fall"
    ],
    "vid": [
     "vid/box_wan_A.mp4",
     "vid/box_wan_B.mp4"
    ]
   },
   {
    "name": "Cosmos3-Super",
    "pred": [
     "fall",
     "fall"
    ],
    "vid": [
     "vid/box_cosmos3-super_A.mp4",
     "vid/box_cosmos3-super_B.mp4"
    ]
   }
  ]
 },
 {
  "id": "pipe",
  "title": "Ball into a pipe",
  "desc": "The ball is a little wider (A) or a little narrower (B) than the pipe opening.",
  "split": "sim",
  "members": [
   {
    "img": "img/pipe_A.jpg",
    "gt": "blocked",
    "gtvid": "vid/pipe_A_gt.mp4"
   },
   {
    "img": "img/pipe_B.jpg",
    "gt": "pass",
    "gtvid": "vid/pipe_B_gt.mp4"
   }
  ],
  "models": [
   {
    "name": "Gemini Omni Flash 1.1",
    "pred": [
     "pass",
     "pass"
    ],
    "vid": [
     "vid/pipe_omni-flash-1.1_A.mp4",
     "vid/pipe_omni-flash-1.1_B.mp4"
    ]
   },
   {
    "name": "MiniMax-H3",
    "pred": [
     "pass",
     "pass"
    ],
    "vid": [
     "vid/pipe_minimax-h3_A.mp4",
     "vid/pipe_minimax-h3_B.mp4"
    ]
   },
   {
    "name": "Wan2.2-I2V-A14B",
    "pred": [
     "pass",
     "pass"
    ],
    "vid": [
     "vid/pipe_wan_A.mp4",
     "vid/pipe_wan_B.mp4"
    ]
   },
   {
    "name": "Cosmos3-Super",
    "pred": [
     "pass",
     "pass"
    ],
    "vid": [
     "vid/pipe_cosmos3-super_A.mp4",
     "vid/pipe_cosmos3-super_B.mp4"
    ]
   }
  ]
 },
 {
  "id": "slide",
  "title": "Ball down a funnel",
  "desc": "The funnel's narrowest gap is a little narrower (A) or a little wider (B) than the ball.",
  "split": "sim",
  "members": [
   {
    "img": "img/slide_A.jpg",
    "gt": "stuck",
    "gtvid": "vid/slide_A_gt.mp4"
   },
   {
    "img": "img/slide_B.jpg",
    "gt": "finished",
    "gtvid": "vid/slide_B_gt.mp4"
   }
  ],
  "models": [
   {
    "name": "Gemini Omni Flash 1.1",
    "pred": [
     "stuck",
     "stuck"
    ],
    "vid": [
     "vid/slide_omni-flash-1.1_A.mp4",
     "vid/slide_omni-flash-1.1_B.mp4"
    ]
   },
   {
    "name": "MiniMax-H3",
    "pred": [
     "finished",
     "finished"
    ],
    "vid": [
     "vid/slide_minimax-h3_A.mp4",
     "vid/slide_minimax-h3_B.mp4"
    ]
   },
   {
    "name": "Wan2.2-I2V-A14B",
    "pred": [
     "finished",
     "finished"
    ],
    "vid": [
     "vid/slide_wan_A.mp4",
     "vid/slide_wan_B.mp4"
    ]
   },
   {
    "name": "Cosmos3-Super",
    "pred": [
     "finished",
     "finished"
    ],
    "vid": [
     "vid/slide_cosmos3-super_A.mp4",
     "vid/slide_cosmos3-super_B.mp4"
    ]
   }
  ]
 },
 {
  "id": "drop",
  "title": "Object at the table edge",
  "desc": "The same object rests on the table (A) or is moved past its tipping point (B).",
  "split": "real",
  "members": [
   {
    "img": "img/drop_A.jpg",
    "gt": "stay"
   },
   {
    "img": "img/drop_B.jpg",
    "gt": "fall"
   }
  ],
  "models": [
   {
    "name": "Gemini Omni Flash 1.1",
    "pred": [
     "fall",
     "fall"
    ],
    "vid": [
     "vid/drop_omni-flash-1.1_A.mp4",
     "vid/drop_omni-flash-1.1_B.mp4"
    ]
   },
   {
    "name": "MiniMax-H3",
    "pred": [
     "fall",
     "fall"
    ],
    "vid": [
     "vid/drop_minimax-h3_A.mp4",
     "vid/drop_minimax-h3_B.mp4"
    ]
   },
   {
    "name": "Wan2.2-I2V-A14B",
    "pred": [
     "fall",
     "fall"
    ],
    "vid": [
     "vid/drop_wan_A.mp4",
     "vid/drop_wan_B.mp4"
    ]
   },
   {
    "name": "Cosmos3-Super",
    "pred": [
     "stay",
     "stay"
    ],
    "vid": [
     "vid/drop_cosmos3-super_A.mp4",
     "vid/drop_cosmos3-super_B.mp4"
    ]
   }
  ]
 },
 {
  "id": "match",
  "title": "Shape-matching box",
  "desc": "The same wooden ball over a round hole (A) or a heart-shaped hole (B).",
  "split": "real",
  "members": [
   {
    "img": "img/match_A.jpg",
    "gt": "fit"
   },
   {
    "img": "img/match_B.jpg",
    "gt": "no_fit"
   }
  ],
  "models": [
   {
    "name": "Gemini Omni Flash 1.1",
    "pred": [
     "fit",
     "no_fit"
    ],
    "vid": [
     "vid/match_omni-flash-1.1_A.mp4",
     "vid/match_omni-flash-1.1_B.mp4"
    ]
   },
   {
    "name": "MiniMax-H3",
    "pred": [
     "fit",
     "fit"
    ],
    "vid": [
     "vid/match_minimax-h3_A.mp4",
     "vid/match_minimax-h3_B.mp4"
    ]
   },
   {
    "name": "Wan2.2-I2V-A14B",
    "pred": [
     "fit",
     "fit"
    ],
    "vid": [
     "vid/match_wan_A.mp4",
     "vid/match_wan_B.mp4"
    ]
   },
   {
    "name": "Cosmos3-Super",
    "pred": [
     "no_fit",
     "no_fit"
    ],
    "vid": [
     "vid/match_cosmos3-super_A.mp4",
     "vid/match_cosmos3-super_B.mp4"
    ]
   }
  ]
 },
 {
  "id": "seesaw",
  "title": "Seesaw",
  "desc": "Two equal blocks; the one farther from the pivot sits on the left (A) or on the right (B).",
  "split": "real",
  "members": [
   {
    "img": "img/seesaw_A.jpg",
    "gt": "left_down"
   },
   {
    "img": "img/seesaw_B.jpg",
    "gt": "right_down"
   }
  ],
  "models": [
   {
    "name": "Gemini Omni Flash 1.1",
    "pred": [
     "left_down",
     "right_down"
    ],
    "vid": [
     "vid/seesaw_omni-flash-1.1_A.mp4",
     "vid/seesaw_omni-flash-1.1_B.mp4"
    ]
   },
   {
    "name": "MiniMax-H3",
    "pred": [
     "left_down",
     "left_down"
    ],
    "vid": [
     "vid/seesaw_minimax-h3_A.mp4",
     "vid/seesaw_minimax-h3_B.mp4"
    ]
   },
   {
    "name": "Wan2.2-I2V-A14B",
    "pred": [
     "unclear",
     "unclear"
    ],
    "vid": [
     "vid/seesaw_wan_A.mp4",
     "vid/seesaw_wan_B.mp4"
    ]
   },
   {
    "name": "Cosmos3-Super",
    "pred": [
     "right_down",
     "right_down"
    ],
    "vid": [
     "vid/seesaw_cosmos3-super_A.mp4",
     "vid/seesaw_cosmos3-super_B.mp4"
    ]
   }
  ]
 }
];
