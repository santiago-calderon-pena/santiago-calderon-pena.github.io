---
title: "Real-time incremental explanations for object detectors"
authors: "Santiago Calderón-Peña*, Hana Chockler, David A. Kelly"
description: "Existing black box explainability tools for object detectors
rely on multiple calls to the model, which prevents them from
computing explanations in real time. In this paper we introduce IncX, an algorithm for real-time incremental approximations of explanations, based on linear transformations of
saliency maps."
custom_link_label: "Read preprint"
custom_link: "https://arxiv.org/abs/2408.11963"
updatedDate: "Sep 15 2022"
badge: "arXiv preprint"
heroImage: "/incx.png"
citation: |
 @misc{calderónpeña2024realtimeincrementalexplanationsobject,
    title={Real-Time Incremental Explanations for Object Detectors}, 
    author={Santiago Calderón-Peña and Hana Chockler and David A. Kelly},
    year={2024},
    eprint={2408.11963},
    archivePrefix={arXiv},
    primaryClass={cs.CV},
    url={https://arxiv.org/abs/2408.11963}, 
  }
---

<h4>Abstract</h4>  
<p>Existing black-box explainability tools for object detectors rely on multiple calls to the model, which prevents them from computing explanations in real time. In this paper, we introduce <strong>IncX</strong>, an algorithm for real-time incremental approximations of explanations, based on linear transformations of saliency maps. We implement IncX on top of <strong>D-RISE</strong>, a state-of-the-art black-box explainability tool for object detectors. We show that IncX’s explanations are comparable in quality to those of D-RISE, with insertion curves being within <strong>8%</strong>, and are computed <strong>two orders of magnitude faster</strong> than D-RISE’s explanations.</p>

<h4>Methods</h4>  
<p>We leveraged computer vision definitions to mathematically prove that the proposed linear transformation of the saliency map can be represented by rigid transformations of the 3D object. In addition to that, we performed our experiments on a subset of <strong>LaSOT</strong> dataset for three models, being <strong>YOLOv10, Faster-RCNN, and RT-DETR</strong>. We compute classic metrics for explainable AI algorithms, such as <strong>insertion</strong> and <strong>deletion</strong> to measure the performance of our algorithm.</p>

<h4>Results</h4>  
<p>The insertion values for IncX are consistently within <strong>8%</strong> of those observed for D-RISE, with all other metrics displaying similar trends. Moreover, the computation time for IncX is <strong>two orders of magnitude lower</strong> than that of D-RISE (<strong>111 times faster</strong> for Faster R-CNN), highlighting the suitability of IncX for real-time scenarios. In addition, when measuring the similarity between the original explanations produced by D-RISE and the ones produced by IncX, we can see that the results show a clear similarity between the approximations implemented by IncX and the original saliency maps created by D-RISE.</p>

<h4>Conclusions</h4>  
<p>Our results demonstrate that IncX operates in real time, with negligible overhead over the object detector and is <strong>two orders of magnitude faster</strong> than generating a new saliency map. Moreover, IncX produces saliency maps closely aligned with freshly computed maps, achieving an average correlation coefficient of approximately <strong>0.8</strong> across all models used, with minimal computational overhead. The quality metrics for assessing explainable AI algorithms show that IncX is comparable to D-RISE, with the insertion score within <strong>8%</strong> of D-RISE’s ones.</p>  
<p>IncX handles linear transformations of objects; future work will address the current limitations related to rotation and object deformation. We anticipate future applications of this algorithm in various industries, particularly in <strong>self-driving cars</strong>.</p>