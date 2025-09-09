---
title: "Explainable AI for the Classification of Brain MRIs"
description: "We performed an analysis of explainable AI tools in a medical setting, demonstrating the significant advantages of ReX, a newly introduced tool at King's College London."
custom_link_label: "Read"
custom_link: "https://www.researchsquare.com/article/rs-4619245/v1"
updatedDate: "Sep 8 2025"
authors: "Nathan Blake, Hana Chockler, David A. Kelly, Santiago Calderón-Peña*, Akchunya Chanchal"
badge: "ECAI 2025 Workshop on EXPLIMED"
checkoutUrl: "https://checkouturl.com/"
heroImage: "/mrxai.png"
citation: |
    @misc{blake2024explainable,
        title = {Explainable AI for the Classification of Brain MRIs}, 
        author = {Nathan Blake and David Kelly and Santiago Calderón-Peña and Akchunya Chanchal and Hana Chockler},
        year = {2024},
        month = {06},
        doi = {10.21203/rs.3.rs-4619245/v1}
    }
---

<h4>Abstract</h4>  
<p>Machine learning applied to medical imaging suffers from a lack of trust due to the opacity of AI models and the absence of clear explanations for their outcomes. <strong>Explainable AI (XAI)</strong> has therefore become a crucial research focus, particularly in high-stakes domains such as healthcare. However, many AI models—both research-based and commercial—are inaccessible for white-box analysis, which requires internal model access. This underscores the need for <strong>black-box explainability tools</strong> tailored for medical applications. While several such tools exist for general images, their effectiveness in medical imaging remains largely unexplored.</p>

<h4>Methods</h4>  
<p>We utilized a publicly available dataset of <strong>brain MRI images</strong> and a classification model trained to distinguish between cancerous and non-cancerous slices. We evaluated several black-box explainability tools, including <strong>LIME, RISE, Integrated Gradients (IG), SHAP, and ReX</strong>, as well as <strong>Grad-CAM</strong> as a white-box baseline. Our assessment employed widely accepted evaluation metrics such as the <strong>Dice Coefficient, Hausdorff Distance, and Jaccard Index</strong>. Additionally, we introduced a novel <strong>Penalized Dice Coefficient</strong> that integrates multiple metrics to provide a more comprehensive evaluation of explanation quality.</p>

<h4>Results</h4>  
<p>Our results show that <strong>ReX</strong> achieves a Dice Coefficient of <strong>0.42±0.20</strong>, outperforming other black-box methods and demonstrating performance comparable to <strong>Grad-CAM</strong> (Dice Coefficient = <strong>0.33±0.22</strong>). A qualitative analysis further highlights key failure modes in existing XAI methods, emphasizing the importance of robust explainability tools in medical applications.</p>

<h4>Conclusions</h4>  
<p>All the XAI tools evaluated in this study exhibit limitations when applied to <strong>tumor detection in MRIs</strong>. However, <strong>ReX</strong> consistently outperforms alternative black-box methods and achieves results on par with <strong>Grad-CAM</strong>, a significant finding given that the latter relies on white-box access. These findings underscore the potential of <strong>ReX</strong> as a viable XAI tool for medical imaging applications.</p>