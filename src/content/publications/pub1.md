---
title: "Real-time incremental explanations for object detectors"
authors: "Santiago Calderón-Peña*, Hana Chockler, David A. Kelly"
description: "Existing black box explainability tools for object detectors
rely on multiple calls to the model, which prevents them from
computing explanations in real time. In this paper we introduce IncX, an algorithm for real-time incremental approximations of explanations, based on linear transformations of
saliency maps."
custom_link_label: "Read preprint"
custom_link: "https://arxiv.org/pdf/2408.11963"
updatedDate: "Sep 15 2022"
badge: "arXiv preprint"
heroImage: "/incx.png"
citation: ""
---

Abstract: Existing black box explainability tools for object detectors
rely on multiple calls to the model, which prevents them from
computing explanations in real time. In this paper we introduce IncX, an algorithm for real-time incremental approximations of explanations, based on linear transformations of
saliency maps. We implement IncX on top of D-RISE, a stateof-the-art black-box explainability tool for object detectors.
We show that IncX’s explanations are comparable in quality to those of D-RISE, with insertion curves being within
8%, and are computed two orders of magnitude faster that
D-RISE’s explanations.

Methods:

Results:

Conclusions: Our results demonstrate that IncX operates in real time, with
negligible overhead over the object detector and is two orders of magnitude faster than generating a new saliency map.
Moreover, IncX produces saliency maps closely aligned with
freshly computed maps, achieving an average correlation coefficient of approximately 0.8 across all models used, with
minimal computational overhead. The quality metrics for assessing explainable AI algorithms show that IncX is comparable to D-RISE, with the insertion score within 8% of DRISE’s ones.
IncX handles linear transformations of objects; future
work will address the current limitations related to rotation
and object deformation. We anticipate future applications
of this algorithm in various industries, particularly in selfdriving cars and video advertisement placement

Cite: 