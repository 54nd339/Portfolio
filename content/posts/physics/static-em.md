---
title: Static Electricity
description: Unveiling the World of Electric Charges
date: 2023-02-17
draft: false
slug: /pensieve/physics/static-em
tags:
  - Physics
  - Electromagnetism
---
Our world is filled with invisible forces that govern the interactions between objects. Electricity, a fundamental force shaping our technology and understanding of the universe, arises from electric charges. This blog post delves into the captivating realm of electric charges, exploring their properties, interactions, and how they influence electric fields.

### The Fundamental Players: Electric Charges

Electric charges come in two types: positive (+) and negative (-). Objects with the same type of charge repel each other, while objects with opposite charges attract each other. These interactions form the basis of electrical phenomena. The basic unit of electric charge is the Coulomb (C).

**The Charge of the Matter:** The charge of an object is quantized, meaning it can only take on discrete values that are integer multiples of the elementary charge (e), approximately equal to $1.6 \times 10^{-19}$ C. This quantization explains why charges are always observed in whole-number multiples of the elementary charge.

**Conservation of Charge:** Electric charge is conserved, meaning the total charge in a closed system remains constant over time. Charge can be transferred between objects, but the total charge in the system remains the same.

**Conductors and Insulators: Charge Behavior**

Materials can be classified as conductors or insulators based on their ability to conduct electric charge. Conductors allow charge to flow freely, while insulators restrict charge movement. Semiconductors are a third category that exhibit properties of both conductors and insulators.

**Methods of Charging:** There are several ways to charge an object:

1. **Friction**: Rubbing two objects together transfers charge between them.
2. **Conduction**: Direct contact between charged and uncharged objects allows charge transfer.
3. **Induction**: Bringing a charged object near an uncharged object induces charge separation in the uncharged object.

These methods are used in various applications, from generating static electricity to powering electronic devices.

### The Law of Attraction: Coulomb's Law

The force between two stationary point charges is governed by Coulomb's Law. This law states that the magnitude of the electrostatic force ($F$) between two point charges $q_1$ and $q_2$, separated by a distance $r$, is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them:

$$
F = k \dfrac{q_1 q_2}{r^2}
$$

where k is the Coulomb constant, approximately equal to $1/4\pi\epsilon_0 = 18.99 \times 10^9 Nm^2/C^2$. The force is attractive if the charges have opposite signs and repulsive if they have the same sign.

**Vector Form of Coulomb's Law:** The force between two charges is a vector quantity, meaning it has both magnitude and direction. The direction of the force is along the line joining the two charges, and the force is repulsive if the charges have the same sign and attractive if they have opposite signs.

$$
\vec{F} = k \dfrac{q_1 q_2}{r^2} \hat{r}
$$

where $\hat{r}$ is the unit vector pointing from charge $q_1$ to charge $q_2$.

$$
\vec{F} = \dfrac{1}{4\pi\epsilon_0} \dfrac{q_1 q_2}{|r_2 - r_1|^2} \cdot \dfrac{\vec{r_2} - \vec{r_1}}{|\vec{r_2} - \vec{r_1}|}
$$

$$
\vec{F} = \dfrac{1}{4\pi\epsilon_0} \dfrac{q_1 q_2}{|\vec{r_2} - \vec{r_1}|^3} (\vec{r_2} - \vec{r_1})
$$

**Superposition Principle:** Coulomb's Law obeys the superposition principle, which states that the total force on a charge due to multiple charges is the vector sum of the forces exerted by each individual charge.

**Forces Between Multiple Charges**

When dealing with multiple charges, the principle of superposition applies. The net force on a point charge due to several other charges is the vector sum of the individual forces exerted by each charge. Mathematically, for a charge q_0 experiencing forces due to charges $q_1, q_2, \ldots, q_n$, the net force ($F_{net}$) is:

$$
F_{net} = \sum\limits_{i=1}^{n} F_i
$$

where $F_i$ is the force exerted by the $i$-th charge on the reference charge $q_0$.

For continuous charge distributions (like a charged wire or sheet), calculus is used to integrate the contributions from infinitesimal charge elements.

### The Electric Field: A Force Field for Charges

The electric field (E) at a point in space is defined as the force (F) experienced by a unit positive test charge (q = 1 C) placed at that point. The electric field is a vector quantity, meaning it has both magnitude and direction. It describes the influence of nearby charges on any other charge placed in that field.

The electric field due to a point charge q can be derived using Coulomb's Law:

$$
E = k \dfrac{q}{r^2}
$$

In vector form, the electric field due to a point charge q at a distance r from the charge is:

$$
\vec{E} = \frac{\vec{F}}{q} = k \dfrac{q}{r^2} \hat{r}
$$

where $\hat{r}$ is the unit vector pointing from the charge to the observation point.

$$
\vec{E} = \dfrac{1}{4\pi\epsilon_0} \dfrac{q}{|\vec{r} - \vec{r_0}|^2} \cdot \dfrac{\vec{r} - \vec{r_0}}{|\vec{r} - \vec{r_0}|}
$$

$$
\vec{E} = \dfrac{1}{4\pi\epsilon_0} \dfrac{q}{|\vec{r} - \vec{r_0}|^3} (\vec{r} - \vec{r_0})
$$

**Electric Field Lines:** These are imaginary lines that depict the direction and relative strength of the electric field at every point in space. They are drawn such that the tangent to the line at any point gives the direction of the electric field at that point, and the line density represents the electric field strength (more lines indicate a stronger field).

**Superposition of Electric Fields:** The principle of superposition applies to electric fields as well. The net electric field at a point due to multiple charges is the vector sum of the electric fields produced by each individual charge.

**Electric Field of Continuous Charge Distributions:** For continuous charge distributions, the electric field is calculated by integrating the contributions from infinitesimal charge elements. The electric field due to a linear charge distribution ($\lambda$), a surface charge distribution ($\sigma$), and a volume charge distribution ($\rho$) can be determined using integration techniques.

$$
E = \dfrac{1}{4\pi\epsilon_0} \int \dfrac{dq}{r^2}
$$

### Electric Flux: A Measure of Field Flow

Electric flux ($\Phi_E$) is a measure of the flow of electric field through a surface. It quantifies the number of electric field lines passing through a given area and is related to the charge enclosed by the surface.

**Electric Flux Through a Surface:** The electric flux through a closed surface is given by:

$$
\Phi_E = \int \vec{E} \cdot d\vec{A}
$$

where $\vec{E}$ is the electric field, $d\vec{A}$ is the differential area element, and the integral is taken over the entire surface.

**Gauss's Law:** Gauss's Law relates the electric flux through a closed surface to the total charge enclosed by the surface:

$$
\Phi_E = \oint \vec{E} \cdot d\vec{A} = \dfrac{Q_{enc}}{\epsilon_0}
$$

where $Q_{enc}$ is the total charge enclosed by the surface and $\epsilon_0$ is the permittivity of free space.

**Applications of Electric Flux:** Electric flux is used to calculate the electric field due to symmetric charge distributions, such as point charges, charged spheres, and charged cylinders. By choosing a Gaussian surface that encloses the charge distribution, the electric field can be calculated using the symmetry of the charge distribution.

**Gaussian Surface:** A Gaussian surface is an imaginary closed surface used to apply Gauss's Law. The choice of the Gaussian surface depends on the symmetry of the charge distribution to simplify the calculation of the electric field.

**Charge Densities:** Charge densities describe how charge is distributed in space. There are three types of charge densities: linear charge density ($\lambda$), surface charge density ($\sigma$), and volume charge density ($\rho$). These densities are used to calculate the total charge enclosed by a Gaussian surface.

### The Electric Potential: Energy at Play

The electric potential (V) at a point in space is the electric potential energy per unit charge at that point. It is a scalar quantity that describes the potential energy of a charge placed in an electric field. The electric potential is measured in volts (V), where 1 V is equivalent to 1 J/C.

The electric potential due to a point charge q at a distance r from the charge is given by:

$$
V = k \dfrac{q}{r}
$$

The electric potential due to a continuous charge distribution can be calculated by integrating the contributions from infinitesimal charge elements.

$$
V = \dfrac{1}{4\pi\epsilon_0} \int \dfrac{dq}{r}
$$

**Relation Between Electric Field and Electric Potential:** The electric field (E) at a point is related to the electric potential (V) at that point by the equation:

$$
\vec{E} = -\nabla V
$$

where $\nabla$ is the gradient operator. This relationship indicates that the electric field points in the direction of the steepest decrease in electric potential.

**Equipotential Surfaces:** These are imaginary surfaces in space where the electric potential is constant. The electric field lines are always perpendicular to the equipotential surfaces. Equipotential surfaces help visualize the electric field and potential distribution in space.

**Electric Potential Energy:** The electric potential energy ($U$) of a system of charges is the work done to assemble the charges from infinity to their final positions. The electric potential energy of a system of charges $q_1$ and $q_2$ separated by a distance $r$ is given by:

$$
U = k \dfrac{q_1 q_2}{r}
$$

The electric potential energy can be positive (for like charges) or negative (for opposite charges). The potential energy of a system of charges can be converted into kinetic energy when the charges are allowed to move.

**Potential Energy of a System of Charges:** The potential energy of a system of charges is the sum of the pairwise interactions between all pairs of charges in the system. The total potential energy of the system is the sum of the potential energy contributions from each pair of charges.

**Work Done in Moving Charges:** When charges are moved in an electric field, work is done on the charges, changing their potential energy. The work done in moving a charge q through an electric potential difference $\Delta V$ is given by:

$$
W = q \Delta V
$$

This equation shows that work is done on a charge when it is moved through an electric potential difference.

### Electric Dipoles

An electric dipole consists of two equal and opposite charges separated by a small distance. The dipole moment ($\vec{p}$) of an electric dipole is defined as the product of the charge magnitude and the separation distance between the charges:

$$
\vec{p} = q \cdot \vec{d}
$$

where q is the charge magnitude and $\vec{d}$ is the separation vector pointing from the negative charge to the positive charge.

**Electric Dipole Moment:** The electric dipole moment is a vector quantity that points from the negative charge to the positive charge. It characterizes the strength and orientation of the dipole.

**Electric Field of an Electric Dipole:** The electric field due to an electric dipole at a point with an angle $\theta$ between the axis of the dipole and the line connecting the point to the center of the dipole to the point is given by:

$$
E = \dfrac{1}{4\pi\epsilon_0} \dfrac{p}{r^3} \sqrt{1 + 3 \cos^2 \theta}
$$

where p is the magnitude of the dipole moment and r is the distance from the center of the dipole to the observation point.

![Electric Dipole](https://physicscatalyst.com/elec/elecpot_fig5.png)

**Electric Potential of an Electric Dipole:** The electric potential due to an electric dipole at a point with an angle $\theta$ between the axis of the dipole and the line connecting the point to the center of the dipole is given by:

$$
V = \dfrac{q}{4\pi\epsilon_0} (\dfrac{1}{r_1} - \dfrac{1}{r_2})
$$

As QD and PC are perpendicular to OR, we can write $r_1 = OR - OD = r - a \cos \theta$ and $r_2 = OR + OC = r + a \cos \theta$ .

$$
V = \dfrac{q}{4\pi\epsilon_0} (\dfrac{1}{r - a \cos \theta} - \dfrac{1}{r + a \cos \theta})
$$

$$
V = \dfrac{q}{4\pi\epsilon_0} \dfrac{2 a \cos \theta}{r^2 - a^2 \cos^2 \theta}
$$

For $r >> a$, the potential becomes:

$$
V = \dfrac{q}{4\pi\epsilon_0} \dfrac{2a \cos \theta}{r^2} = \dfrac{p}{4\pi\epsilon_0} \dfrac{\cos \theta}{r^2}
$$

The gradient in polar coordinates is given by:

$$
\vec{\nabla} V = \dfrac{\partial V}{\partial r} \hat{r} + \dfrac{1}{r} \dfrac{\partial V}{\partial \theta} \hat{\theta}
$$

$$
\vec{\nabla} V = \dfrac{p}{4\pi\epsilon_0} (-\dfrac{2}{r^3} \cos \theta \, \hat{r} -  \dfrac{\sin \theta}{r^3} \hat{\theta})
$$

$$
\vec{\nabla} V = -\dfrac{p}{4 \pi \epsilon_0 r^3} (2 \cos \theta \, \hat{r} + \sin \theta \, \hat{\theta})
$$

$$
E = -\vec{\nabla} V = \dfrac{p}{4 \pi \epsilon_0 r^3} (2 \cos \theta \, \hat{r} + \sin \theta \, \hat{\theta})
$$

$$
\|\vec{E}\| = \dfrac{p}{4 \pi \epsilon_0 r^3} \sqrt{4 \cos^2 \theta + \sin^2 \theta}
$$

$$
\|\vec{E}\| = \dfrac{1}{4 \pi \epsilon_0} \dfrac{p}{r^3} \sqrt{1 + 3 \cos^2 \theta}
$$

When the dipole is kept in a uniform electric field, the torque acting on the dipole is given by:

$$
\tau = pE \sin \theta = \vec{p} \times \vec{E}
$$

where $\theta$ is the angle between the dipole moment and the electric field.

### Poisson's and Laplace's Equations

Poisson's and Laplace's equations are partial differential equations that describe the behavior of electric fields in space. These equations are used to calculate the electric potential and electric field due to charge distributions.

**Poisson's Equation:** Poisson's equation relates the electric potential ($V$) to the charge density ($\rho$) in space:

$$
\nabla^2 V = -\dfrac{\rho}{\epsilon_0}
$$

where $\nabla^2$ is the Laplacian operator. Poisson's equation is used to calculate the electric potential due to charge distributions.

**Laplace's Equation:** Laplace's equation is a special case of Poisson's equation where the charge density is zero:

$$
\nabla^2 V = 0
$$

Laplace's equation is used to calculate the electric potential in regions of space where there are no charges present.

### Energy Density in Electric Fields

The energy density of an electric field is a measure of the energy stored in the electric field per unit volume. It describes the energy per unit volume required to create the electric field and is an important quantity in understanding the behavior of electric fields.

**Energy Density Equation:** The energy density ($u_E$) of an electric field is given by:

$$
u_E = \dfrac{1}{2} \epsilon_0 E^2
$$

where $\epsilon_0$ is the permittivity of free space and $E$ is the magnitude of the electric field. The energy density is proportional to the square of the electric field strength.

**Energy Stored in an Electric Field:** The total energy stored in an electric field can be calculated by integrating the energy density over the volume of the region containing the electric field:

$$
U = \int u_E dV
$$

This integral gives the total energy stored in the electric field in the region of interest.

**Applications of Energy Density:** The energy density of an electric field is used to calculate the energy stored in capacitors, the energy required to create electric fields, and the energy distribution in regions with electric fields. Understanding the energy density of electric fields is essential for designing electrical systems and devices.

### Conductors and Insulators: Charge Distribution

Conductors and insulators are two types of materials that exhibit different behaviors when exposed to electric fields. Conductors allow charge to flow freely, while insulators restrict charge movement. The behavior of charges in conductors and insulators is governed by the distribution of charges on the surface of the material.

**Conductors:** In conductors, charges are free to move within the material. When a conductor is placed in an electric field, the charges redistribute themselves on the surface of the conductor to cancel the field inside the conductor. This redistribution of charges creates an electric field that is perpendicular to the surface of the conductor.

**Insulators:** In insulators, charges are tightly bound to the atoms and cannot move freely. When an insulator is placed in an electric field, the charges do not redistribute themselves, and the electric field penetrates the material. This behavior is why insulators are used to store charge in capacitors.

**Charging of Conductors:** When a conductor is charged, the charges distribute themselves on the surface of the conductor to minimize the electric field inside the conductor. Excess charge accumulates on the surface of the conductor, creating an electric field that is perpendicular to the surface.

**Faraday Cage:** A Faraday cage is a conductive enclosure that shields its contents from external electric fields. When an external electric field is applied to a Faraday cage, the charges redistribute themselves on the surface of the cage to cancel the field inside, protecting the contents from the external field.

**Electrostatic Equilibrium:** A conductor is in electrostatic equilibrium when the charges on the surface of the conductor are at rest and the electric field inside the conductor is zero. In equilibrium, the charges redistribute themselves to cancel any external electric fields.

**Induced Charges:** When a charged object is brought near a conductor, the charges on the conductor redistribute themselves to create an electric field that cancels the field due to the external charge. This redistribution of charges is known as induced charges.

### Capacitors: Storing Electric Energy

A capacitor is a device used to store electric charge and energy. It consists of two conductive plates separated by a dielectric material. When a voltage is applied across the plates, charge accumulates on the plates, creating an electric field between them.

**Capacitance:** The capacitance (C) of a capacitor is a measure of its ability to store charge and energy. It is defined as the ratio of the charge stored on the plates to the voltage across the plates:

$$
C = \dfrac{Q}{V}
$$

The SI unit of capacitance is the Farad (F), where 1 F is equivalent to 1 C/V.

Field due to a charged capacitor is given by:

$$
E = \dfrac{\sigma}{\epsilon_0} = \dfrac{Q}{A \epsilon_0}
$$

Potential difference between the plates kept at a distance $d$ is given by:

$$
V = \int_0^d E \, dl = \dfrac{Qd}{A \epsilon_0}
$$

So, capacitance can be written as:

$$
C = \dfrac{Q}{V} = \dfrac{A \epsilon_0}{d}
$$

Force between the plates of a capacitor is given by:

$$
F = E \cdot Q = \dfrac{Q^2}{2 A \epsilon_0}
$$

The 2 in the denominator is due to the fact that the field is due to both plates.

**Energy Stored in a Capacitor:** The energy stored in a capacitor is given by:

$$
U = \dfrac{1}{2} CV^2
$$

This equation shows that the energy stored in a capacitor is proportional to the square of the voltage across the plates and the capacitance of the capacitor.

This can be derived from the work done in charging a capacitor:

$$
W = \int_0^Q V \, dQ = \dfrac{Q^2d}{2A\epsilon_0} = \dfrac{Q^2}{2C} = \dfrac{1}{2} CV^2
$$

**Energy Density in a Capacitor:** The energy density of a capacitor is a measure of the energy stored in the electric field between the plates per unit volume. It is given by:

$$
u = \dfrac{1}{2} \epsilon_0 E^2
$$

This equation shows that the energy density is proportional to the square of the electric field strength.

This can be derived from the energy stored in a capacitor:

$$
u = \dfrac{U}{\text{Vol}} = \dfrac{1}{2} CV^2 \cdot \dfrac{1}{Ad} = \dfrac{1}{2} \dfrac{Q^2d}{A\epsilon_0} \cdot \dfrac{1}{Ad} = \dfrac{1}{2} \dfrac{Q^2}{A^2\epsilon_0} = \dfrac{1}{2} \epsilon_0 E^2
$$

**Dielectric Materials:** Dielectric materials are insulating materials used in capacitors to increase the capacitance and breakdown voltage of the capacitor. Dielectrics reduce the electric field between the plates, allowing the capacitor to store more charge and energy.

**Series and Parallel Capacitors:** Capacitors can be connected in series or parallel to achieve different capacitance values and energy storage capabilities. In series, the total capacitance is less than the smallest individual capacitance, while in parallel, the total capacitance is the sum of the individual capacitances.

In series, the charges are same but the voltage is different across each capacitor. So,

$$
V = V_1 + V_2 + \ldots + V_n
$$

$$
\dfrac{Q}{C_{eq}} = \dfrac{Q}{C_1} + \dfrac{Q}{C_2} + \ldots + \dfrac{Q}{C_n}
$$

$$
\dfrac{1}{C_{eq}} = \dfrac{1}{C_1} + \dfrac{1}{C_2} + \ldots + \dfrac{1}{C_n}
$$

$$
C_{eq} = \sum \dfrac{1}{C_i}
$$

In parallel, the charges are different but the voltage is same across each capacitor. So,

$$
Q = Q_1 + Q_2 + \ldots + Q_n
$$

$$
V = V_1 = V_2 = \ldots = V_n
$$

$$
C_{eq} = C_1 + C_2 + \ldots + C_n
$$

$$
C_{eq} = \sum C_i
$$

**Charging and Discharging of Capacitors:** When a capacitor is connected to a voltage source, it charges up until the voltage across the plates equals the source voltage. When the capacitor is disconnected from the source, it discharges through a resistor, releasing the stored energy.

Accross the circuit, the voltage is given by:

$$
E = \dfrac{Q(t)}{C} + \dfrac{dQ}{dt} R
$$

where $Q(t)$ is the charge on the capacitor at time t, C is the capacitance, and R is the resistance.

$$
\dfrac{EC - Q}{RC} = \dfrac{dQ}{dt}
$$

$$
\int \dfrac{dQ}{Q - EC} = -\dfrac{1}{RC} \int dt
$$

$$
\ln(Q - EC) = -\dfrac{t}{RC} + \ln K
$$

$$
Q(t) = EC + K e^{-t/RC}
$$

At $t = 0$, $Q = 0$, so $K = -EC$.

$$
Q(t) = EC(1 - e^{-t/RC})
$$

$$
V(t) = E(1 - e^{-t/RC})
$$

While discharging, $E = 0$, so the equation becomes:

$$
Q(t) = K e^{-t/RC}
$$

At $t = 0$, $Q = EC$, so $K = EC$.

$$
Q(t) = EC e^{-t/RC}
$$

$$
V(t) = E e^{-t/RC}
$$

**Time Constant:** The time constant ($\tau$) of an RC circuit is a measure of how quickly the capacitor charges or discharges. It is defined as the product of the resistance and capacitance:

$$
\tau = RC
$$

When $t = \tau$, the charge on the capacitor reaches approximately 63% of its final value while charging and 37% of its initial value while discharging.

$$
Q = Q_0 (1 - e^{-1}) \approx 0.63 Q_0
$$

$$
Q = Q_0 e^{-1} \approx 0.37 Q_0
$$

**RC Circuits:** RC circuits are circuits that contain resistors and capacitors. They are used in various applications, such as timing circuits, filters, and signal processing circuits. The behavior of RC circuits is governed by the time constant and the charge and discharge characteristics of the capacitor.

Current in the circuit while charging is given by:

$$
I = \dfrac{dQ}{dt} = \dfrac{d}{dt} (EC(1 - e^{-t/RC})) = \dfrac{EC}{RC} e^{-t/RC} = I_0 e^{-t/RC}
$$

While discharging, the current is given by:

$$
I = \dfrac{dQ}{dt} = \dfrac{d}{dt} (EC e^{-t/RC}) = -\dfrac{EC}{RC} e^{-t/RC} = -I_0 e^{-t/RC}
$$

**Applications of Capacitors:** Capacitors are used in various applications, such as energy storage, filtering, timing circuits, and signal processing. They are essential components in electronic devices and systems, providing energy storage and voltage regulation.

### Conclusion

Electric charges play a crucial role in our understanding of the physical world. From the interactions between charges to the storage of energy in capacitors, the realm of electric charges is vast and fascinating. By exploring the properties of electric charges, the behavior of electric fields, and the energy stored in capacitors, we gain insights into the fundamental forces that shape our universe.
