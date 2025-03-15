---
title: Optics
description: A Journey Through Light Waves and Interference Phenomena
date: 2023-01-30
draft: false
slug: /pensieve/physics/optics
tags:
  - Physics
  - Optics
---
## Ray Optics

### Reflection through the Looking Glass: Mirrors and Images

Mirrors play a crucial role in optics, reflecting light and creating images. Understanding the behavior of light rays as they interact with mirrors is essential for designing optical systems and analyzing image formation.

Let's explore the key concepts related to mirrors and image formation:

* **Reflection:** When light rays strike a mirror, they bounce off according to the law of reflection. This law states that the angle of incidence is equal to the angle of reflection, ensuring that light rays maintain a specific relationship with the mirror surface.
* **Laws of Reflection:** The laws of reflection govern the behavior of light rays interacting with mirrors:

  * The incident ray, the reflected ray, and the normal to the mirror surface at the point of incidence all lie in the same plane.
  * The angle of incidence is equal to the angle of reflection.
  * The incident ray and the reflected ray are on opposite sides of the normal to the mirror surface.
* **Focal Length:** The focal length of a mirror is the distance between the mirror's surface and its focal point. For concave mirrors, the focal length is positive, while for convex mirrors, it is negative.
* **Mirror Equation:** Let's consider a spherical mirror with a focal length $f$ and radius $r$, an object distance $u$, and an image distance $v$. We know, the normal at any point on the mirror surface passes through the center of curvature.

![Ray diagram for a concave mirror](https://lh3.googleusercontent.com/eHv-0QMFF8W3MLnF1mDJxVDr3irN5iov8RDoI53fSx83c1LkGYYJEnNEDSCVPnFM9GqIaOKmi9NbhOewCxUTQGxafT3jW9bedGje33qttDIzjtZ2N-oKaekWHIbKxO6_0mlyVzbX8GVfkKEev2CeNw)

For triangles $AOC$, $\gamma = \alpha + \theta$
For triangles $AIC$, $\beta = \gamma + \theta$

Substracting the two equations, we get: $2\gamma = \alpha + \beta$

From the diagram, we can observe:

$$
\tan{\alpha} = \frac{h}{u} \quad \text{and} \quad \tan{\gamma} = \frac{h}{R} \quad \text{and} \quad \tan{\beta} = \frac{h}{v}
$$

For small angles, $\tan{\theta} \approx \theta$. So, we can write:

$$
\alpha = \tan{\alpha} \approx \alpha \quad \text{and} \quad \beta = \tan{\beta} \approx \beta \quad \text{and} \quad \gamma = \tan{\gamma} \approx \gamma
$$

Substituting these values in the equation $2\gamma = \alpha + \beta$, we get:

$$
2\frac{h}{R} = \frac{h}{u} + \frac{h}{v}
$$

$$
\frac{2}{R} = \frac{1}{f} = \frac{1}{u} + \frac{1}{v}
$$

The sign convention for the mirror equation is simplified as, whatever is in-front of the mirror is taken as positive and whatever is behind the mirror is taken as negative.

* **Image Formation:** Depending on the object's position relative to the mirror, different types of images can be formed:

  * **Real Image:** A real image is formed when light rays converge at a point after reflection. Real images can be projected onto a screen and are typically formed by concave mirrors.
  * **Virtual Image:** A virtual image is formed when light rays appear to diverge from a point behind the mirror. Virtual images cannot be projected onto a screen and are typically formed by convex mirrors.
* **Image Characteristics:** The characteristics of an image formed by a mirror can be determined by analyzing the image distance and magnification:

  * **Image Distance:** The image distance is the distance between the mirror and the image. It can be positive for real images and negative for virtual images.
  * **Magnification:** The magnification of an image is the ratio of the image height to the object height. It can be calculated using the formula:

$$
M = -\frac{v}{u}
$$

where $M$ is the magnification, $v$ is the image distance, and $u$ is the object distance.

* **Types of Mirrors:** Mirrors can be classified into two main types based on their curvature:

  * **Plane Mirrors:** When the $f$ of a mirror is infinite, it is called a plane mirror. Plane mirrors produce virtual images that are upright and laterally inverted.
  * **Spherical Mirrors:** Spherical mirrors have a curved surface, which can be concave or convex. Concave mirrors converge light rays to a focal point, while convex mirrors diverge light rays.
    * **Concave Mirrors:** Concave mirrors are curved inward, creating real or virtual images depending on the object's position. They are commonly used in telescopes and headlights.
    * **Convex Mirrors:** Convex mirrors are curved outward, producing virtual images that are smaller and upright. They are often used in rear-view mirrors to provide a wider field of view.
* **Ray Diagrams:** Ray diagrams are graphical representations of light rays interacting with mirrors. By drawing incident rays parallel to the mirror's principal axis and reflecting them according to the law of reflection, we can determine the location and characteristics of the image formed by the mirror.

  * **Concave Mirror Ray Diagrams:** For concave mirrors, incident rays parallel to the principal axis converge at the focal point after reflection. Incident rays passing through the focal point reflect parallel to the principal axis.
    | Position of Object | Position of Image | Nature of Image                 |
    | ------------------ | ----------------- | ------------------------------- |
    | S > C              | Between F and C   | Real, Inverted, Dimnished       |
    | S = C              | At C              | Real, Inverted, Same Size       |
    | C > S > F          | Beyond C          | Real, Inverted, Enlarged        |
    | S = F              | At Infinity       | Real, Inverted, Highly Enlarged |
    | S < F              | Behind the Mirror | Virtual, Upright, Enlarged      |
  * **Convex Mirror Ray Diagrams:** For convex mirrors, incident rays diverge after reflection, creating virtual images that are smaller and upright. The focal point and center of curvature are located behind the mirror.
    | Position of Object | Position of Image | Nature of Image              |
    | ------------------ | ----------------- | ---------------------------- |
    | Any Position       | Behind the Mirror | Virtual, Upright, Diminished |
* **Applications of Mirrors:** Mirrors have a wide range of applications in various fields, including:

  * **Optical Instruments:** Mirrors are used in telescopes, microscopes, and cameras to focus light and create images.
  * **Automotive Industry:** Mirrors are essential components of vehicles, providing drivers with rear-view and side-view visibility.
  * **Cosmetic and Personal Care:** Mirrors are used in makeup mirrors, dressing tables, and reflective surfaces for personal grooming.
  * **Architecture and Interior Design:** Mirrors are used to enhance lighting, create illusions of space, and add aesthetic appeal to buildings and interiors.

By understanding the principles of reflection, mirror behavior, and image formation, we can appreciate the role of mirrors in shaping our perception of the world and enabling a wide range of practical applications.

### Refraction and Lenses: A Clearer View of the World

Refraction is the bending of light as it passes from one medium to another, leading to fascinating optical phenomena. Lenses, which are made of transparent materials with curved surfaces, utilize refraction to focus light and create images. Let's explore the key concepts related to refraction and lenses:

* **Refraction:** When light passes from one medium to another, its speed changes, causing it to bend. This phenomenon is known as refraction and is governed by Snell's Law, which relates the angles of incidence and refraction to the refractive indices of the two media.

$$
\frac{\sin(i)}{\sin(r)} = \mu_{21} = \frac{\mu_2}{\mu_1} = \frac{v_1}{v_2}
$$

where:

- $i$ is the angle of incidence, and $r$ is the angle of refraction,
- $\mu_1$ and $\mu_2$ are the refractive indices of the two media, and
- $v_1$ and $v_2$ are the velocities of light in the two media.

Derivation of Snell's Law:

It can be derived from Fermat's principle of least time. When light travels from one medium to another, it follows the path that minimizes the time taken to travel between two points. By considering the time taken for light to travel from one point to another, we can derive Snell's Law.

![Derivation of Snell's Law](https://i.ytimg.com/vi/iUg1uw_A79A/maxresdefault.jpg)

* **Refractive Index:** The refractive index of a medium is a measure of how much light slows down when passing through that medium. It is defined as the ratio of the speed of light in a vacuum to the speed of light in the medium.

$$
\mu = \frac{c}{v}
$$

where $\mu$ is the refractive index of the medium, $c$ is the speed of light in a vacuum, and $v$ is the speed of light in the medium.

* **Total Internal Reflection:** When light travels from a denser medium to a rarer medium at an angle greater than the critical angle, total internal reflection occurs. This phenomenon is crucial in fiber optics and other optical devices.

The critical angle ($C$) is given by:

$$
\sin(C) = \frac{\mu_2}{\mu_1}
$$

where $\mu_1$ and $\mu_2$ are the refractive indices of the two media.

* **Lenses:** Lenses are transparent objects with curved surfaces that refract light to form images. These are governed by the lens formula:

$$
\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_3 - \mu_1}{R_1} + \frac{\mu_3 - \mu_2}{R_2}
$$

where:

- $u$ is the object distance, $v$ is the image distance,
- $\mu_1$, $\mu_2$ and $\mu_3$ are the refractive indices of the object, the medium between the lens, and the image respectively,
- $R_1$ and $R_2$ are the radii of curvature of the lens surfaces.

Derivation of Lens Formula:

Consider a lens with two spherical surfaces of radii $R_1$ and $R_2$ made of a medium of refractive index $\mu_3$. Let $O$ be the object, $I$ be the image, $F_1$ and $F_2$ be the focal points, and $C_1$ and $C_2$ be the centers of curvature of the two surfaces. Let the object distance be at $u$ in medium $\mu_1$ and the image distance be at $v$ in medium $\mu_2$. The lens formula can be derived by considering the refraction of light at the two surfaces of the lens.

For a single surface, the lens formula can be written as:

$$
\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R_1}
$$

![Derivation of Lens Formula](https://i.ytimg.com/vi/GBt0C9fla-o/maxresdefault.jpg)

So, Between $\mu_1$ and $\mu_3$:

$$
\frac{\mu_3}{v} - \frac{\mu_1}{u} = \frac{\mu_3 - \mu_1}{R_1}
$$

Between $\mu_3$ and $\mu_2$:

$$
\frac{\mu_2}{v} - \frac{\mu_3}{u} = \frac{\mu_2 - \mu_3}{R_2}
$$

Adding the two equations, we get:

$$
\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_3 - \mu_1}{R_1} + \frac{\mu_3 - \mu_2}{R_2}
$$

* **Types of Lenses:** Lenses can be classified into two main types based on their curvature and refractive properties:

  * **Convex Lenses:** Convex lenses are thicker at the center and thinner at the edges, causing light rays to converge after refraction. They are commonly used in magnifying glasses and cameras to create real images.
  * **Concave Lenses:** Concave lenses are thinner at the center and thicker at the edges, leading to diverging light rays. They are used in corrective eyeglasses and optical devices to create virtual images.
* **Lens Ray Diagrams:** Ray diagrams for lenses involve tracing light rays as they interact with the lens surfaces. By drawing incident rays parallel to the principal axis and refracting them through the lens, we can determine the location and characteristics of the image formed by the lens.

  * **Convex Lens Ray Diagrams:** For convex lenses, incident rays parallel to the principal axis converge at the focal point after refraction. Incident rays passing through the focal point emerge parallel to the principal axis.

#### Refraction through glass slab

![Ray Diagram](https://www.aplustopper.com/wp-content/uploads/2016/08/Refraction-through-a-rectangular-glass-slab.png)

Let $PQRS$ be a glass slab. Let $AB$ be the incident ray and $CD$ be the refracted ray. Let $N_1N_2$ be the normal to the surface at $PQ$ and $N_1'N_2'$ be the normal to the surface at $RS$. Let $i$ be the angle of incidence and $r$ be the angle of refraction. Let $t$ be the thickness of the glass slab. Let $\mu$ be the refractive index of the medium from which the light is coming and $\mu_g$ be the refractive index of the glass slab.

$\cos{r} = \frac{t}{EF}$ and $\sin{(i-r)} = \frac{d}{EF} \implies \frac{\sin{(i-r)}}{\cos{r}} = \frac{d}{t}$. So,

$$
d = t \sec{r} \sin{(i-r)}
$$

For small angles, $\cos{\theta} = 1 \quad \text{and} \quad \sin{\theta} = \theta$. So, $d = t (i - r)$. But $r = \frac{i}{\mu_g/\mu}$. So,

$$
d = t \left(i - \frac{i}{\mu_g/\mu}\right) = t \left(1 - \frac{\mu}{\mu_g}\right) i
$$

For multiple refractions, $d = \sum_{i=1}^{n} t_i \left(1 - \frac{1}{\mu_l}\right) i$

$\mu_l$ is the relative refractive index of the medium.

#### Refraction through a prism

![Ray Diagram](https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/02/14055147/11480pppppppppppppppppppppppppppp.png)

Let A, B, C be the glass of the prism. Suppose BC is the base and AB and AC are its two refracting surfaces. From the above figure, we can say that OP is the incident. The ray traveling through the rarer medium and than the refractive index of the prism is the incident ray. As the ray PQ strikes the surface of the and it is called as the refracted ray. OR is the emergent ray which comes out.

When the ray light enters the glass, it bends towards normal and when ray comes out, it bends away from the normal. Now the angle between the emergent ray and incident ray is the angle of deviation. For a single refracting surface,  $\delta = |i – r|$

In this case, $\delta = (i_1 + i_2) – (r_1 + r_2)$

$A$ is the angle between the prism between two lateral surfaces. We know that $\angle A$ and $\angle N$ is $\pi$ and Angle of the prism of ($A$) is $r1 + r2$. So, $r1 + r2 = A$

$$
\delta = i_1 + i_2 – A
$$

For an angle of minimum deviation, $\delta$ is minimum and $i_1 = i_2 = i$ and $r_1 = r_2 = r$. So, $\delta = 2i – A$. We can also write $\delta = A + D_m$ where $D_m$ is the angle of minimum deviation. We can determine the refractive index of the prism using the formula:

$$
\mu = \frac{\sin{\frac{A + D_m}{2}}}{\sin{\frac{A}{2}}}
$$

For small A, $\sin{\theta} = \theta$. So, $\mu = \frac{i_1}{r_1} \quad \text{and} \quad \mu = \frac{i_2}{r_2}$. Substituting the values of $i_1$ and $i_2$ in the equation, we get:

$$
\delta = \mu(r_1 + r_2) – A = A(\mu – 1)
$$

## Wave Optics

### Nature's Light Show: Interference in Thin Films

When light waves meet, they can interact in fascinating ways, leading to phenomena like interference. Interference occurs when two or more waves overlap, creating regions of constructive and destructive interference. This principle plays a crucial role in understanding thin films and other optical devices.

* **Thin Film Interference:** When light waves reflect off the top and bottom surfaces of a thin film, they can interfere with each other. Depending on the thickness of the film and the wavelength of light, constructive or destructive interference may occur. This leads to the formation of bright and dark fringes in the reflected light, known as interference fringes.

For maximum intensity of reflected light,

$$
2\mu t \cos(r) + \frac{\lambda}{2} = n\lambda
$$

$$
2\mu t \cos(r) = (n - \frac{1}{2})\lambda
$$

where:

- $\mu$ is the refractive index of the medium between the surfaces,
- $t$ is the thickness of the air gap,
- $r$ is the angle of incidence,
- $\lambda$ is the wavelength of light, and
- $n$ is an integer representing the order of the ring.

For minimum intensity of reflected light,

$$
2\mu t \cos(r) + \frac{\lambda}{2} = (n + \frac{1}{2})\lambda
$$

$$
2\mu t \cos(r) = n \lambda
$$

For maximum intensity of transmitted light,

$$
2\mu t \cos(r) = n \lambda
$$

For minimum intensity of transmitted light,

$$
2\mu t \cos(r) = (n - \frac{1}{2})\lambda
$$

* **Newton's Rings:** When a slightly curved surface is placed on a flat glass plate with a thin air gap in between, the reflected light from both surfaces interferes. This creates a characteristic pattern of alternating bright and dark rings observed when illuminated by monochromatic light. The dark rings correspond to constructive interference for specific wavelengths. Analyzing this pattern allows for the determination of the wavelength of light and the refractive index of the curved surface material.

$$
r^2 = R^2 - (R - t)^2
$$

$$
r^2 = 2Rt - t^2
$$

$$
r = \sqrt{2Rt - t^2}
$$

where:

- $r$ is the radius of the nth ring,
- $R$ is the radius of curvature of the lens, and
- $t$ is the thickness of the air gap.

* **Michelson Interferometer:** This highly precise instrument utilizes the concept of interference to measure minute length differences. It splits a light beam into two paths, recombining them later. By introducing a small path difference in one arm, the resulting interference pattern can be used to measure incredibly small displacements with exceptional accuracy. Applications include measuring the speed of light and testing the theory of relativity.

### Unveiling the Hidden: Diffraction and Gratings

Light waves not only travel in straight lines but also bend around obstacles. This phenomenon, called diffraction, reveals the wave nature of light.

* **Diffraction by a Single Slit:** When light passes through a narrow slit, it diffracts, spreading out beyond the geometrical shadow. The wave equation can be used to analyze the diffraction pattern, which consists of a central bright maximum flanked by alternating dark and bright fringes.

The intensity of the light at an angle $\theta$ for the mth minimum is given by:

$$
I_m = I_0 \left(\frac{\sin(\alpha)}{\alpha}\right)^2
$$

where:

- $I_0$ is the intensity of the incident light,
- $\alpha = \frac{\pi a}{\lambda} \sin(\theta)$,
- $a$ is the width of the slit, and
- $\lambda$ is the wavelength of light.

The condition for the first minimum in the diffraction pattern is:

$$
\sin(\theta) = \pm \frac{\lambda}{a}
$$

This equation determines the angular position of the first dark fringe in the diffraction pattern.

* **Plane Diffraction Grating:** A diffraction grating is a collection of many closely spaced slits or grooves ruled on a surface. When light falls on a grating, each slit acts as a source of diffracted light. These diffracted waves superimpose, creating a specific pattern of diffracted beams.

Intensity of the diffracted light at an angle $\theta$ for the mth order is given by:

$$
I_m = I_0 \left(\frac{\sin(\alpha)}{\alpha}\right)^2 \left(\frac{\sin(N\beta)}{\sin(\beta)}\right)^2
$$

where:

- $I_0$ is the intensity of the incident light,
- $\alpha = \frac{\pi a}{\lambda} \sin(\theta)$,
- $\beta = \frac{\pi d}{\lambda} \sin(\theta)$,
- $a$ is the width of the slit,
- $d$ is the spacing between the slits, and
- $N$ is the total number of slits.

The diffraction pattern from a grating consists of bright maxima at specific angles determined by the grating spacing and the wavelength of light. The central maximum is the brightest, with additional maxima on either side.

For max / min intensity:

$$
\frac{dI}{d\theta} = 0 \Rightarrow \sin(\theta) = \pm \frac{m\lambda}{d}
$$

where $m$ is the order of the diffraction maximum.

Minima occur at:

$$
\sin(\theta) = \pm \frac{(m + \frac{1}{2})\lambda}{d}
$$

Primary maxima occur at:

$$
\sin(\theta) = \pm \frac{m\lambda}{d}
$$

Secondary maxima occur at:

$$
\sin(\theta) = \pm \frac{2m\lambda}{d}
$$

Diffraction gratings have numerous applications, including:

* **Spectroscopy:** By analyzing the diffraction pattern of light from a source, gratings can be used to separate light of different wavelengths, revealing the composition of the source. This technique is crucial in studying the composition of stars and other celestial objects.
* **Color Filters:** Gratings can be used to selectively filter specific wavelengths of light, creating colored filters for various applications.
* **Absent Spectra:** In diffraction gratings, under certain conditions, specific diffraction orders might be missing from the resulting pattern. This phenomenon is known as absent spectra.

The key to understanding absent spectra lies in the combined effects of the single slit and the grating itself. A diffraction grating acts like multiple closely spaced slits, but each slit also diffracts light on its own.

When the width of the opaque portion of the grating (b) is equal to the width of the transparent portion (a), a specific condition arises. Light diffracted by each individual slit experiences destructive interference for certain diffraction orders. This destructive interference cancels out those specific orders in the overall diffraction pattern from the grating.

Mathematically, the condition for absent spectra for even diffraction orders (m = 2, 4, 6, ...) can be expressed as $b = a$

This essentially means that half the light is blocked by the opaque part of the grating, leading to destructive interference for even orders. Consequently, only odd diffraction orders (m = 1, 3, 5, ...) will be present in the final pattern.

### Resolving Power and Dispersive Power of Gratings

Two important characteristics of diffraction gratings are resolving power and dispersive power:

* **Resolving Power (R):** The ability of a grating to distinguish between closely spaced wavelengths. It is defined as the ratio of the wavelength ($\lambda$) to the minimum resolvable difference in wavelength ($\Delta \lambda$):

$$
R = \frac{\lambda}{\Delta \lambda} = nN = \frac{N(e+d)\sin \theta_n}{\lambda}
$$

where:

- $n$ is the order of the spectrum,
- $N$ is the total number of lines in the grating,
- $e$ is the angle of incidence,
- $d$ is the grating spacing, and
- $\theta_n$ is the angle of diffraction for the nth order.

A higher resolving power indicates a greater ability to separate close wavelengths.

* **Dispersive Power (D):** The ability of a grating to spread out light of different wavelengths. It is defined as the change in angular separation ($\Delta \theta$) per unit change in wavelength ($\Delta \lambda$):

$$
D = \frac{d \theta}{d \lambda} = \frac{n}{(e + d) \cos \theta}
$$

where:

- $n$ is the refractive index of the grating material,
- $e$ is the angle of incidence,
- $d$ is the grating spacing, and
- $\theta$ is the angle of diffraction.

A higher dispersive power implies a larger angular separation for different wavelengths, making them easier to distinguish.

The resolving power and dispersive power of a grating are related to the number of slits (N) and the grating spacing (d):

$$
R = N \left(\frac{\sin(\theta_m)}{m}\right)
$$

$$
D = \frac{m}{d}
$$

These equations highlight the importance of both the number of slits and the grating spacing in determining the performance of a grating. By carefully designing the grating with appropriate N and d, scientists can optimize its ability to resolve and differentiate between closely spaced wavelengths.

### Conclusion

Optics is a fascinating field that delves into the intricate behavior of light waves. From interference phenomena in thin films to the diffraction patterns of gratings, the study of light reveals the wave nature of this fundamental entity. By understanding the principles of interference, diffraction, and grating behavior, scientists and engineers can develop innovative optical devices with a wide range of applications, from spectroscopy to telecommunications. The journey through optics continues to illuminate our understanding of the world around us, revealing the hidden beauty of light waves and their interactions.
