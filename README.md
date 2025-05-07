# Multimodal-Meme-Classification

This repository presents a multimodal deep learning project for classifying mental health-related memes, combining both textual and visual signals. The system is designed for robust multi-label and single-label classification across depression and anxiety categories. <br>
The project was developed for the [Natural Language Processing](https://techtree.iiitd.edu.in/viewDescription/filename?=CSE556) course at IIIT Delhi in Winter 2025.

**<h4>🛠️ Features:</h4>**
- **Multimodal Pipeline:** Combines OCR-based text and image content using Mental-RoBERTa and CLIP Vision encoders.
- **Cross-Attention Fusion:** Cross-modal attention layers to align and integrate features from text and image modalities.
- **Mixture-of-Experts:** Adaptive expert fusion using a gating network to improve representational capacity.
- **Contrastive Learning:** Alignment of text, image, and fused embeddings through contrastive loss in shared embedding space.
- **Classification:** Transformer-based classifier predicts multi-label depression (RESTORE) and single-label anxiety (AxiOM).

**<h4>📋 Installation & Usage:</h4>**
- Clone the repository and install the following Python libraries:
```bash
pip install pandas numpy matplotlib scikit-learn jupyter transformers torch torchvision tqdm pillow
```
- Follow the instructions in the Jupyter notebook to train or evaluate the model.

**<h4>📙 Notebooks & Dataset Details:</h4>**
- `trained_anxiety.ipynb`: Classifies memes into one of several anxiety categories (single-label classification) using AxiOM dataset.
- `trained_depression.ipynb`: Predicts multiple subcategories of depression (multi-label classification) using RESTORE dataset.

**<h4>💾 Download Pretrained Weights & Datasets:</h4>**
- [Anxiety Model Weights](https://drive.google.com/file/d/16mIkJvgao_jahdWoyE-FD5NDste2pY34/view?usp=sharing)
- [Depression Model Weights](https://drive.google.com/file/d/1WGVLdLLJmz5aRu7Xj175sIul4ViqA6Dp/view?usp=sharing)
- [AxiOM (Anxiety Meme Classification)](https://drive.google.com/file/d/1doU9FE1tJ-0IL4tKZUOOp76JkXKuTkFU/view?usp=drive_link)
- [RESTORE (Depression Meme Classification)](https://drive.google.com/file/d/1LQoyq_ZjHJih7hxJ2yJ_OrZhOIE_BZwB/view?usp=drive_link)

**<h4>🧑‍🤝‍🧑 Other Contributors:</h4>**
My IIIT Delhi batchmates Manan Aggarwal & Souparno Ghose also contributed in this project.

📌 Important: Please make sure to follow the guidelines and policies outlined by the institution regarding the use of shared coursework materials. Use this repository responsibly and avoid any violations of academic integrity. Codes are provided for reference purposes only. It's recommended to understand the codes and implement them independently.
