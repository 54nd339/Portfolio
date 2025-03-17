---
title: Magetic Materials - The Invisible Attraction
description: Magnets aren’t just for fridge doors! This post dives into the secret lives of magnetic materials—why some stick, others repel, and how quantum mechanics plays a role. From MRI machines to data storage, discover the invisible dance of atoms that keeps our world running. Click in—it’s attractive!
date: 2023-02-14
draft: false
slug: /pensieve/physics/magnetic
tags:
  - Physics
  - Electromagnetism
---
The world of magnetism permeates our daily lives, from the needles of compasses to the powerful electromagnets used in MRI machines. But what lies beneath the surface of these magnetic materials? This blog post delves into the fascinating realm of magnetic materials, exploring their properties, classifications, and the underlying theories that explain their behavior.

### A Measure of Magnetism: Susceptibility and Permeability

* **Magnetic Field Strength (H):** This vector field represents the magnetic field intensity in a medium. It is measured in amperes per meter (A/m) or oersteds (Oe).
* **Magnetic Flux Density (B):** This vector field represents the number of lines of force crossing per unit area of the medium. It is measured in tesla (T) or gauss (G).
* **Magnetization (M):** This vector field represents the magnetic moment per unit volume of a material. It is measured in amperes per meter (A/m) or oersteds (Oe).

$$
B = \mu_0(H + M)
$$

where $\mu_0$ is the permeability of free space ($4\pi x 10^{-7}$ Tm/A).

When a material is placed in an external magnetic field (B), it can experience a slight modification of the field. This response is quantified by two key parameters:

* **Magnetic Susceptibility ($\chi$):** It represents the degree to which a material can be magnetized by an external field. A positive susceptibility ($\chi \gt 0$) indicates that the material reinforces the external field, while a negative susceptibility ($\chi \lt 0$) indicates an opposing effect.

$$
M \propto H \implies M = \chi H
$$

* **Magnetic Permeability ($\mu_r$):** This parameter relates the total magnetic field ($B$) inside a material to the applied external field ($B_0$):

$$
B \propto H \implies B = \mu H
$$

In vaccum, $\mu_r = 1$ and $\mu = \mu_0$. For a material, $\mu_r \gt 1$ and $\mu = \mu_r \mu_0$.

$$
B_0 = \mu_0 H
$$

$$
\frac{B}{B_0} = \frac{\mu}{\mu_0} = \mu_r
$$

The relationship between susceptibility and permeability is given by:

$$
B = \mu_0(H + M) = \mu_0(1 + \chi)H
$$

$$
\mu = \mu_0(1 + \chi) = \mu_0\mu_r
$$

$$
\mu_r = 1 + \chi
$$

### The Classification Act: Diamagnetic, Paramagnetic, and Ferromagnetic Materials

Magnetic materials can be broadly classified into three main categories based on their susceptibility:

* **Diamagnetic Materials ($\chi \lt 0$ and $\mu_r \lt 1$):** These materials weakly oppose the external magnetic field. Their induced magnetic field is aligned opposite the applied field. Examples include diamagnetic elements like helium and silver, as well as some organic compounds.
* **Paramagnetic Materials ($\chi \gt 0$ and $\mu_r \gt 1$):** These materials exhibit a weak alignment with the external magnetic field. The induced magnetic field is aligned in the same direction as the applied field, although the alignment is not perfect due to thermal fluctuations. Examples include paramagnetic elements like oxygen and transition metals with unpaired electrons.
* **Ferromagnetic Materials ($\chi \gg 0$ and $\mu_r \gg 1$):** These materials exhibit a very strong attraction to the external magnetic field. They can retain their own magnetization (permanent magnetism) even in the absence of an external field. Examples include iron, nickel, and cobalt.

### Unveiling the Microscopic Origins: Langevin's Theory and Paramagnetism

Langevin's theory provides a classical explanation for paramagnetism. It considers paramagnetic atoms to possess permanent magnetic moments due to unpaired electrons. In the absence of an external field, these moments are randomly oriented due to thermal agitation.

When an external field is applied, it tends to align the magnetic moments with the field. However, thermal energy counteracts this alignment. Langevin's theory uses statistical mechanics to calculate the average magnetic moment per atom as a function of temperature and the strength of the applied field. This average magnetic moment can then be used to determine the bulk magnetization of the material and its susceptibility.

**Langevin's paramagnetic susceptibility ($\chi_L$):**

$$
\chi_L = \frac{N \mu^2}{3kT}
$$

where:

* $N$ is the number of atoms per unit volume, i.e., $N = \mu_0 n$. Here, $n$ is the number of atoms per unit volume.
* $\mu$ is the magnitude of the atomic magnetic moment
* $k$ is Boltzmann's constant
* $T$ is the absolute temperature

This can be rewritten as:

$$
\chi_L = \frac{C}{T}
$$

where $C = \frac{N \mu^2}{3k}$ is the Curie constant.

This equation predicts that susceptibility decreases with increasing temperature, which is consistent with experimental observations for paramagnetic materials.

### Ferromagnetism: Beyond Classical Descriptions - Weiss Theory

Ferromagnetism cannot be explained solely by classical models like Langevin's theory. Weiss theory introduces the concept of a strong internal magnetic field ($H_i$) within a ferromagnetic material. This internal field arises due to the exchange interaction between neighboring atomic magnetic moments. The exchange interaction favors parallel alignment of these moments, leading to a spontaneous magnetization even in the absence of an external field.

**Weiss mean field:** Weiss theory assumes a mean internal field ($H_i$) proportional to the average magnetization ($M$) of the material:

$$
H_i = \lambda M
$$

where $\lambda$ is the Weiss constant, characterizing the strength of the exchange interaction. The effective magnetic field experienced by an atomic moment is the sum of the external field ($B_0$) and the internal field:

$$
H = B_0 + H_i = B_0 + \lambda M
$$

This internal field acts in conjunction with the external field (B_0) to determine the total magnetic field experienced by the atomic moments. The theory predicts a dependence of susceptibility on temperature, with a sharp decrease above a critical temperature called the Curie temperature ($T_C$).

**Curie Temperature ($T_C$):** The temperature at which the internal thermal fluctuations overcome the ferromagnetic ordering, and the material loses its spontaneous magnetization. Above the Curie temperature, the material behaves like a paramagnet. The Curie-Weiss Law relates the susceptibility ($\chi$) to temperature (T) near the Curie temperature:

$$
χ = \frac{C}{T - T_C} = \frac{C}{T - C\lambda}
$$

where C is the Curie constant, a material-specific parameter related to the number of magnetic moments per unit volume and their magnetic moment strength. This law predicts a divergence of susceptibility as the temperature approaches the Curie temperature from below, which is a characteristic signature of ferromagnetism. More specifically, for $T \gt T_C$, the material behaves as a paramagnet. It can be shown as:

$$
\chi = \frac{C}{(T - T_C)^\gamma}
$$

where $\gamma = 1$ for ferromagnetic materials, $\gamma = 0.5$ for antiferromagnetic materials, and $\gamma = 2$ for superparamagnetic materials.

### The Quantum Dance: Quantum Mechanical Origins of Magnetism

The classical theories of magnetism provide valuable insights into the behavior of magnetic materials. However, to fully understand the microscopic origins of magnetism, we must turn to quantum mechanics. Quantum mechanical models provide a more accurate description of the magnetic properties of materials at the atomic and subatomic levels.

* **Quantum Mechanical Spin:** The intrinsic angular momentum of elementary particles, such as electrons, gives rise to their magnetic moment. The concept of spin is essential for understanding the magnetic properties of atoms and materials.

$$
\vec{S} = \sqrt{s(s + 1)}\hbar
$$

where $s$ is the spin quantum number, and $\hbar$ is the reduced Planck constant.

* **Exchange Interaction:** Quantum mechanics reveals that the exchange interaction between electrons in a material plays a crucial role in determining its magnetic behavior. The exchange interaction favors parallel alignment of electron spins, leading to the formation of magnetic domains in ferromagnetic materials.

$$
H = -2J\sum_{i,j} \vec{S}_i \cdot \vec{S}_j
$$

where $J$ is the exchange integral, and the sum is taken over all pairs of interacting spins.

* **Quantum Mechanical Models:** Quantum mechanical models, such as the Heisenberg model and the Hubbard model, provide a more sophisticated description of the magnetic properties of materials. These models take into account the quantum nature of electron spins and their interactions, leading to a more accurate prediction of magnetic behavior.

$$
H = -J\sum_{\langle i,j \rangle} \vec{S}_i \cdot \vec{S}_j
$$

where the sum is taken over nearest-neighbor pairs of spins.

The quantum mechanical description of magnetism sheds light on the intricate dance of magnetic moments at the atomic and subatomic levels. By incorporating quantum effects, we can better understand the origins of ferromagnetism, antiferromagnetism, and other magnetic phenomena observed in materials.

### Beyond Ferromagnetism: New Frontiers in Magnetic Materials

The study of magnetic materials has expanded beyond traditional ferromagnetic materials to explore new frontiers in magnetism:

* **Antiferromagnetism:** In antiferromagnetic materials, neighboring atomic moments align antiparallel to each other, leading to a cancellation of the net magnetization. Antiferromagnetic materials exhibit unique magnetic properties and are used in various applications, such as magnetic sensors and spintronics devices.
* **Ferrimagnetism:** Ferrimagnetic materials exhibit a combination of ferromagnetic and antiferromagnetic behavior, with two sublattices of magnetic moments aligning antiparallel to each other but with unequal magnitudes. Ferrimagnetic materials are used in applications like magnetic recording media and magnetic sensors.
* **Multiferroics:** Multiferroic materials exhibit both ferroelectric and ferromagnetic properties, allowing for the control of magnetism with an electric field and vice versa. Multiferroic materials have potential applications in spintronics, magnetic memory devices, and sensors.

### A World of Magnetism: Applications and Beyond

The understanding of magnetic materials has led to numerous technological advancements:

* **Data Storage:** Magnetic hard disk drives utilize the persistent magnetization of ferromagnetic materials to store data.
* **Transformers:** These devices rely on the principle of electromagnetic induction, which involves changing magnetic fields inducing electric currents.
* **Magnetic Resonance Imaging (MRI):** This powerful medical imaging technique utilizes the manipulation of strong magnetic fields and radio waves to create detailed images of internal organs.

The exploration of magnetic materials continues to push the boundaries of technology. New materials with tailored magnetic properties are being developed for applications in areas like spintronics, magnetic refrigeration, and magnetic random-access memory (MRAM).

By delving into the fascinating world of magnetic materials, we gain a deeper appreciation for the invisible forces that shape our technological landscape and provide a glimpse into the intricate dance of magnetism at the atomic and microscopic level.
