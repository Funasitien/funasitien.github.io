# Partie 1 : Le choix intertemporel entre consommation et loisir

L’individu dispose d’un temps total T, qu’il répartit entre loisir t et travail l (avec t + l = T). Il consomme un bien x, dont le prix est p > 0, en finançant cette consommation avec un revenu exogène y > 0 et le revenu salarial w l (avec w > 0). La contrainte de revenu s’écrit donc :   p·x = y + w·l   et, en notant l = T – t,   p·x = y + w·(T – t).

Ses préférences sont représentées par la fonction d’utilité u(x, t) qui vérifie les axiomes standards.

─────────────────────────────

## 1.1. Formalisation du problème de maximisation

L’individu choisit (x, t) pour maximiser son utilité sous la contrainte budgétaire. Le problème s’écrit :

  Maximiser   u(x, t)   sous      p·x = y + w·(T – t)          x > 0, T > t > 0.

On peut ainsi écrire le problème comme :

  Problem (P1) :     max₍ₓ,ₜ₎  u(x, t)     s.c.   p·x – w·(T – t) – y = 0.

─────────────────────────────

## 1.2. Résolution par la méthode du Lagrangien

On introduit le multiplicateur de Lagrange θ ≥ 0 pour la contrainte budgétaire. Le Lagrangien s’écrit :

  L(x,t; θ) = u(x, t) + θ·[y + w·(T – t) – p·x].

### 1.2.1. Possibilité que θ = 0 ?

Pour une solution intérieure (c’est-à-dire x > 0, t < T et l > 0) et avec l’hypothèse de non‑satiété, la contrainte budgétaire est toujours _active_ (elle est satisfaite à l’égalité). Si l’on se trouvait dans une situation où la contrainte n’était pas liant, il serait possible d’augmenter x ou t et ainsi augmenter l’utilité, contredisant l’optimalité. Conclusion : Dans une solution intérieure, θ > 0. Cependant, dans des cas particuliers (par exemple en l’absence d’effet de richesse, ou dans une solution en coin non‑standard), on pourrait imaginer θ = 0, mais ici l’hypothèse de non‑satiété impose que la contrainte soit toujours liant, d’où θ > 0.

### 1.2.2. Interprétation économique de θ

Le multiplicateur de Lagrange θ représente la valeur marginale d’une augmentation de la ressource budgétaire. En d’autres termes, θ est la variation marginale de l’utilité lorsque le revenu total y + w·(T – t) augmente d’une unité de monnaie. Il s’agit donc du « prix d’ombre » du revenu ou de la « valeur marginale de la richesse ». Ceci est cohérent avec la théorie du consommateur.

### 1.2.3. Caractérisation de l’équilibre

**Première étape : les conditions d’optimalité (F.O.C.)**

Les dérivées partielles de L par rapport à x et t donnent :

1. ∂L/∂x = uₓ(x,t) – θ·p = 0  ⇒  uₓ(x,t) = θ·p. 2. ∂L/∂t = uₜ(x,t) – θ·w = 0  ⇒  uₜ(x,t) = θ·w.

En combinant ces F.O.C. on obtient :

  [uₜ(x,t)]/[uₓ(x,t)] = w/p.  (1)

L'interprétation économique est la suivante : Le consommateur choisit (x, t) de sorte que le taux marginal de substitution (TMS) entre consommation et loisir (c’est-à-dire la quantité de consommation que l’individu est prêt à sacrifier pour gagner une unité additionnelle de loisir) soit égal au « coût » en termes de revenu d’une heure de loisir en monnaie, c’est-à-dire w/p.

**Deuxième étape : combinaison avec la contrainte**

L’équilibre est déterminé par l’égalité (1) associée à la contrainte budgétaire

  p·x = y + w·(T – t).

Économiquement :

– La condition TMS = w/p exprime l’égalisation du taux marginal de substitution entre x et t avec le taux de transformation imposé par le marché du travail. – Le point d’équilibre est le point de tangence entre une courbe d’indifférence et la contrainte budgétaire.

─────────────────────────────

## 1.3. Représentation graphique de l’équilibre

Nous représentons dans le plan (t, x) :

• L’axe horizontal représente le temps de loisir t • L’axe vertical représente la consommation x

**La contrainte budgétaire**

La contrainte budgétaire s’écrit sous la forme :

  p·x = y + w·(T – t)   ⇒ x = (y + w·(T – t))/p.

Les points remarquables sont :

- Pour t = T (pas de travail, l = 0), on a :   xₐ = y/p   et le point A = (T, y/p).
- Pour t = 0 (le loisir minimal, travail maximal, l = T), on a :   x_b = (y + wT)/p   et le point B = (0, (y + wT)/p).

**Schéma en Mermaid**

Voici un diagramme simplifié de la situation :

```mermaid
%% Diagramme représentant le plan (t, x)
flowchart LR
    A((A : t = T, x = y/p))
    B((B : t = 0, x = (y+wT)/p))
    C((Equilibre : point de tangence))
    subgraph "Plan (t, x)"
        direction LR
        A --- C --- B
    end
```

Sur ce graphique, la **ligne droite** représente la contrainte budgétaire, de pente –w/p. Les **courbes d’indifférence**, convexes par hypothèse, se déplacent vers le haut à mesure que l’utilité augmente. L’équilibre est le point de tangence entre la droite budgétaire et la courbe d’indifférence la plus élevée atteignable par le consommateur. La quantité de travail offerte est l’écart entre T et le loisir choisi t*.

─────────────────────────────

## 1.4. Effets d’une augmentation du taux de salaire w

Considérons l’effet d’une hausse du salaire w sur la répartition du temps.

**Changement de la contrainte budgétaire :**

- L’augmentation de w « pivote » la droite budgétaire : la pente –w/p devient plus raide.
- L’ordonnée à l’origine reste inchangée : lorsque t = T, x = y/p reste fixe.
- L’abscisse à l’origine reste inchangée puisque pour t = 0, x = (y + wT)/p augmente.

**Effets sur le choix du consommateur :**

1. **Effet substitution :**   Une hausse du w augmente le « coût d’opportunité » du loisir.   Le consommateur substituera le loisir contre de la consommation, c’est-à-dire il choisira de travailler davantage (t diminue, l = T – t augmente).
2. **Effet revenu :**   L’augmentation du w accroît le revenu total (revenu du travail), ce qui tend à augmenter la consommation de biens normaux et, si le loisir est normal, à accroître la demande de loisir (on travaille moins).

**Conclusion :** La réponse de l’offre de travail (l) à une augmentation du salaire w est ambigüe. Dans de nombreux modèles, l’effet de substitution tend à inciter l’individu à travailler davantage tandis que l’effet revenu tend à réduire l’offre de travail. L’issue nette dépend donc de la sensibilité relative des deux effets. Ainsi, l’offre de travail « augmente-t-elle » ? La réponse est : cela peut varier selon la spécification précise des préférences (le taux de substitution relatif entre x et t). Dans bon nombre de cas, si le loisir est un bien normal et avec un effet revenu suffisamment fort, l’offre de travail peut même diminuer en dépit de l’augmentation du salaire.

─────────────────────────────

## 1.5. Effet d’une augmentation du revenu exogène y comparé à une augmentation de w

– **Augmentation de y :** La droite budgétaire se translate verticalement vers le haut (le revenu augmente, mais la pente reste –w/p). Cet accroissement déplace le consommateur vers une courbe d’indifférence plus élevée sans modifier le rapport des prix. L’effet revenu porte sur les deux biens. Ainsi le consommateur pourra choisir une combinaison avec plus de consommation x et, si le loisir est normal, plus de loisir t (donc moins de travail). Il n’y a pas d’effet substitution.

– **Augmentation de w :** Comme vu au point précédent, le salaire affecte à la fois la pente (effet substitution) et le revenu total (effet revenu).

**Conclusion :** L’augmentation du revenu exogène y et celle du salaire w ne sont pas équivalentes sur le plan de la décision de travail : – y n’affecte que l’effet revenu (décalage parallèle de la contrainte), – w affecte à la fois la pente (substitution entre consommation et loisir) et le niveau de revenu, d’où la réponse en offre de travail peut être différente.

─────────────────────────────

# Partie 2 : La participation au marché du travail – Possibilité de non‑participation

Dorénavant, la contrainte sur le loisir est élargie : On suppose que t peut atteindre T, ce qui correspond à la situation où l’individu ne travaille pas (l = 0).

L’individu maximise u(x,t) sous :

1. La contrainte budgétaire : p·x = y + w·(T – t).
2. La contrainte sur le temps : t ≤ T.

─────────────────────────────

## 2.1. Écriture du Lagrangien élargi

On introduit :

• θ ≥ 0 le multiplicateur associé à la contrainte budgétaire • δ ≥ 0 le multiplicateur associé à la contrainte sur le loisir (T – t ≥ 0).

Le Lagrangien devient :

  L(x,t; θ, δ) = u(x,t) + θ·[y + w·(T – t) – p·x] + δ·(T – t).

La condition de complémentarité impose : δ · (T – t) = 0.

─────────────────────────────

## 2.2. Résolution – Cas intérieur versus solution en coin

**Cas 1 : Solution intérieure (t < T, c’est-à-dire l > 0)** Dans ce cas, la contrainte sur le temps n’est pas liant, donc δ = 0. Les F.O.C. se retrouvent alors identiques à la partie 1 :

1. uₓ(x,t) – θ·p = 0 2. uₜ(x,t) – θ·w = 0 ⇒ Condition de tangence : uₜ/uₓ = w/p.

**Cas 2 : Solution en coin, non‑participation (t = T, l = 0)** Si la solution intérieure donne (pour les paramètres du modèle) un loisir optimal t* > T, alors la contrainte t ≤ T est liant et s’applique. Dans ce cas, δ > 0 et t = T, l = T – T = 0. La F.O.C. par rapport à t devient :

  ∂L/∂t = uₜ(x,t) – θ·w – δ = 0   avec t = T.

Ici la contrainte impose un choix « extrême » ; le poste marginal de loisir n’est plus égal au « prix » du loisir (w/p), ce qui signifie que la participation sur le marché du travail n’est pas optimale du point de vue intérieur mais devient impossible.

**Conclusion :** L’individu ne participe pas au marché du travail (l = 0) lorsque, dans le problème sans contrainte de temps, l’optimalité viserait un loisir supérieur à T (c’est-à-dire une demande de loisir « trop élevée » au vu des données du modèle).

─────────────────────────────

## 2.3. Représentation graphique de la situation de non‑participation

Nous reprenons le plan (t, x) avec t sur l’axe horizontal.

**Cas en coin (non-participation) :** Le choix optimal est t = T et, par la contrainte budgétaire,   x = (y + w·(T – T))/p = y/p.

Voici un schéma en Mermaid :

```mermaid
%% Diagramme illustrant le cas de non-participation
flowchart LR
    A((Point A: t = T, x = y/p))
    B[Courbe d'indifférence la plus élevée atteignable]
    C[Contrainte budgétaire partant de (T, y/p)]
    A --- B
    B --- C
```

Là, la contrainte budgétaire « pivote » de façon à ce que le seul choix possible compatible avec t ≤ T soit le coin t = T.

─────────────────────────────

## 2.4. Une politique publique pour inciter à la participation

À partir de la situation de non‑participation (t = T, pas de travail), une politique publique peut être envisagée pour inciter l’individu à offrir une quantité de travail positive. Par exemple :

• **Subvention salariale (prime d’activité) :** En augmentant le salaire effectif via un subsidium, le rapport w/p augmente.   Le nouveau salaire effectif devient w′ = w(1 + τ) avec τ > 0, ce qui rend le travail plus attractif et peut déplacer le point de tangence en l’intérieur du domaine (t < T).

• **Réduction des transferts inconditionnels ou indexation négative du revenu exogène :** Si l’augmentation du revenu non lié au travail (y) tend à favoriser la non‑participation, une réduction de y (ou une fiscalisation de ce revenu) peut également inciter à travailler.

Ainsi, une politique visant à augmenter le salaire net effectif du travail (via une subvention) incite l’individu à réduire son loisir et à participer au marché du travail.

─────────────────────────────

# Partie 3 : Spécification fonctionnelle de type Cobb‑Douglas à seuils

Les préférences sont désormais données par :

  u(x, t) = (2/3)·ln(x – x̅) + (1/3)·ln(t – t̅),   avec x̅ > 0 et T > t̅ > 0.

Ces paramètres représenteront des niveaux minimaux de consommation et de loisir (voire « subsistances » ou seuils de confort).

Les autres paramètres (y, p, w, T) étant inchangés, nous nous concentrons sur des solutions intérieures (x > 0, T > t > 0 et l > 0).

─────────────────────────────

## 3.1. Interprétation économique de x̅ et t̅

– x̅ représente le niveau minimal de consommation nécessaire pour que l’utilité soit définie (par exemple, un panier de base ou des besoins vitaux minimum). – t̅ représente le niveau minimal de loisir indispensable (peut-être pour des raisons de bien‑être ou de repos minimum).

Ces seuils traduisent l’idée que l’individu doit consommer au moins x̅ et disposer d’au moins t̅ de loisir pour obtenir du bien‑être.

─────────────────────────────

## 3.2. Calcul des fonctions de demande Marshalliennes et de l’offre de travail

**Problème :** Maximiser   u(x, t) = (2/3) ln(x – x̅) + (1/3) ln(t – t̅) sous   p·x = y + w·(T – t).

**Étape 1 : Écriture du Lagrangien**

  L = (2/3) ln(x – x̅) + (1/3) ln(t – t̅) + θ·[y + w·(T – t) – p·x].

**Étape 2 : F.O.C.**

- Par rapport à x :

  ∂L/∂x = (2/3)·[1/(x – x̅)] – θ·p = 0   ⇒ (2)/(3(x – x̅)) = θ·p  (2)

- Par rapport à t :

  ∂L/∂t = (1/3)·[1/(t – t̅)] – θ·w = 0   ⇒ (1)/(3(t – t̅)) = θ·w  (3)

**Égalisation des expressions de θ issues de (2) et (3) :**

  (2)/(3p(x – x̅)) = (1)/(3w(t – t̅))   ⇒ 2w(t – t̅) = p(x – x̅)   ⇒ x – x̅ = (2w/p)(t – t̅).  (4)

**Étape 3 : Incorporation de la contrainte budgétaire**

La contrainte est :

  p·x = y + w·(T – t)   ⇒ x = [y + w·(T – t)]/p.

Mais d’une autre part, grâce à (4) on peut écrire :

  x = x̅ + (2w/p)(t – t̅).

Ainsi, on égalise :

  x̅ + (2w/p)(t – t̅) = [y + w·(T – t)]/p.

Multiplier par p :

  p·x̅ + 2w(t – t̅) = y + wT – w t.

Réorganisons :

  2w·t – 2w·t̅ + w t = y + wT – p·x̅

  ⇒ 3w·t = y + wT – p·x̅ + 2w·t̅

D'où la demande en loisir :

  t*(p,w,y,T, x̅,t̅) = [y + wT – p·x̅ + 2w·t̅] / (3w).  (5)

**Fonction de demande de consommation x :**

À partir de (4) :

  x – x̅ = (2w/p)(t – t̅).

En remplaçant t par (5) :

  x* = x̅ + (2w/p)·(t* – t̅).

Soit explicitement :

  t* – t̅ = [y + wT – p·x̅ + 2w·t̅] / (3w) – t̅         = [y + wT – p·x̅ – w·t̅] / (3w).

Alors :

  x*(p,w,y,T, x̅,t̅) = x̅ + (2w/p)·([y + wT – p·x̅ – w·t̅] / (3w))        = x̅ + [2(y + wT – p·x̅ – w·t̅)] / (3p).  (6)

**Fonction d’offre de travail**

Le travail offert est l’écart entre le temps total et le loisir :

  l* = T – t* = T – [y + wT – p·x̅ + 2w t̅]⁄(3w).  (7)

Ces équations (5), (6) et (7) sont les demandes Marshalliennes pour t, x et l respectivement.

─────────────────────────────

## 3.3. Effet d’une augmentation de x̅

Rappelons que x̅ est le niveau minimal de consommation (seuil de subsistance). Considérons la dérivation des expressions :

- Pour la demande en consommation (6) :   x*(p,w,y,…) = x̅ + [2(y + wT – p·x̅ – w t̅)]/(3p).   Une augmentation de x̅ a deux effets :    • Un effet direct positif (le terme x̅ apparaît explicitement).    • Un effet négatif via le second terme, puisque –p·x̅ y apparaît.   Le résultat net dépend : en général, la nécessité d’atteindre un niveau supérieur de consommation de base peut « contraindre » l’individu à travailler davantage (c.-à-d. réduire le loisir) pour financer ce supplément.
- Pour la demande en loisir (5) :   t* = [y + wT – p·x̅ + 2w t̅] / (3w).   La dérivée ∂t*/∂x̅ = – p/(3w) < 0, c’est-à-dire, une augmentation de x̅ réduit le temps de loisir.
- Par conséquent, la quantité de travail offerte l* = T – t* augmente.

**Interprétation :** Une hausse du seuil minimal de consommation peut s’expliquer par une amélioration des normes de qualité ou un relèvement du niveau de vie attendu. Cela entraîne une pression pour augmenter la consommation au-delà du seuil minimal et se traduit par une augmentation de l’offre de travail.

─────────────────────────────

## 3.4. Réponse aux variations du prix p

Examinons l’effet d’une hausse du prix p :

- **Sur la demande en consommation (6) :**  Le terme constant x̅ reste inchangé.  Le second terme [2(y + wT – p x̅ – w t̅)]/(3p) diminue si p augmente (effet de prix négatif).  Donc, la consommation de x diminue.
- **Sur la demande en loisir (5) :**  t* = [y + wT – p·x̅ + 2w t̅]⁄(3w) : ici, p intervient uniquement dans le terme –p·x̅, donc une hausse de p diminue t*.
- **Sur l’offre de travail (7) :**  l* = T – t* augmente si le loisir t* diminue.

**Interprétation :** Une augmentation du prix du bien de consommation rend celui‑ci plus cher, incitant l’individu à travailler davantage pour maintenir son niveau de consommation de base – effet substitution.

─────────────────────────────

## 3.5. Effet d’une augmentation du revenu exogène y

Examinons les expressions :

- Pour t* (à partir de (5)) : ∂t*/∂y = 1/(3w) > 0, donc le temps de loisir augmente.
- Pour x* (à partir de (6)) : l’augmentation de y se traduit par une hausse de x*.
- Pour l* = T – t* : l’augmentation de y réduit l’offre de travail.

**Interprétation :** Contrairement à une hausse du salaire, une augmentation du revenu non conditionnel conduit à une augmentation du loisir (effet revenu positif sur le loisir), et donc à une baisse de l’offre de travail.

─────────────────────────────

## 3.6. Identification de la solution en coin (non‑participation)

La solution en coin (t = T, soit l = 0) apparaît lorsque la demande intérieure en loisir dépasse la contrainte : si le t* calculé en (5) est supérieur à T, alors la contrainte t ≤ T se lie et l’individu choisit t = T. À partir de (5) :

  t* = [y + wT – p·x̅ + 2w·t̅] / (3w) ≤ T   ⇔ y + wT – p·x̅ + 2w t̅ ≤ 3wT   ⇔ y ≤ 2wT + p·x̅ – 2w t̅.

Si cette condition n’est pas vérifiée et que l’optimum intérieur donnerait t* > T, alors l’individu se retrouve au coin correspondant à t = T (et l = 0).

**Enseignement de politique économique :** Un revenu exogène trop élevé peut décourager l’activité professionnelle. Ceci rappelle que des politiques générant des transferts trop importants, sans incitatif à travailler (par exemple, trop de redistribution inconditionnelle), peuvent conduire à la non‑participation au marché du travail.

─────────────────────────────

## 3.7. Fonction d’utilité indirecte

À l’optimum, nous avons obtenu :

– De (4) : x – x̅ = (2w/p)(t – t̅). – La demande en loisir (5) :   t* = [y + wT – p·x̅ + 2w·t̅] / (3w).

Posons :

  Δ = y + wT – p·x̅ – w·t̅.  (En effet, dans l’expression de t*, après réécriture, il apparaît : t* – t̅ = Δ/(3w).)

Alors, on peut exprimer :   x* – x̅ = (2w/p)(t* – t̅) = (2w/p)[Δ/(3w)] = 2Δ/(3p).

L’utilité optimisée vaut donc :

  u* = (2/3)·ln(x* – x̅) + (1/3)·ln(t* – t̅)      = (2/3)·ln(2Δ/(3p)) + (1/3)·ln(Δ/(3w))      = (2/3)[ln2 + lnΔ – ln3 – ln p] + (1/3)[lnΔ – ln3 – ln w]      = lnΔ – ln3 – (2/3)(ln p – ln2) – (1/3)ln w.      = ln(Δ) – ln(3p^(2/3)w^(1/3)) + constant.

En notant Z = wT + y, on peut écrire Δ en fonction de (p, w, y, T, x̅, t̅). Ainsi, la fonction d’utilité indirecte s’écrit :

  V(p, w, y, T; x̅, t̅) = ln(y + wT – p·x̅ – w·t̅) – ln(3p^(2/3)w^(1/3)) + C,

où C est une constante (par exemple C = (2/3)ln2) qui résulte des agrégats constants.

─────────────────────────────

## 3.8. Demandes Hicksiennes et minimisation des dépenses

Le problème dual consiste à minimiser la dépense nécessaire pour atteindre un niveau d’utilité u̅, sous la contrainte :

  (2/3) ln(x – x̅) + (1/3) ln(t – t̅) = u̅.

**Formulation du problème :**

  min₍ₓ,ₜ₎  E = p·x + [coût implicite du loisir, ici assimilé en manque de revenu, soit w·(T – t)]          (ou, si l’on se place dans le cadre d’un simple problème d’expenditure, on peut considérer uniquement le coût direct des biens « ajustés » : p(x – x̅) et w(t – t̅) )   s.c.   (2/3) ln(x – x̅) + (1/3) ln(t – t̅) = u̅.

Pour ce type de préférences de type Cobb‑Douglas, le coût minimum se répartit selon les parts des exponents : – La part consacrée à (x – x̅) sera 2/3 de l’excédent de dépense, – Celle consacrée à (t – t̅) sera 1/3.

On peut montrer (par le théorème de dualité et la propriété de régularité des préférences Cobb‑Douglas) que les fonctions de demande Hicksiennes sont proportionnelles aux partages de l’excédent de dépense. Ainsi, on obtiendra :

  ℎₓ(p, w, u̅) = x̅ + (2/3)·[E(p, w, u̅) – p·x̅ – w·t̅]⁄p,   ℎₜ(p, w, u̅) = t̅ + (1/3)·[E(p, w, u̅) – p·x̅ – w·t̅]⁄w,

et d’où l’offre de travail hₗ = T – ℎₜ(p, w, u̅).

**Remarque :** Il est possible de retrouver ces formes à l’aide du multiplicateur du problème dual et de la propriété d’homogénéité de degré 1 de la fonction de dépense.

─────────────────────────────

## 3.9. Fonction de dépense

Pour des préférences Cobb‑Douglas de la forme :

  u(x,t)= (2/3) ln(x – x̅) + (1/3) ln(t – t̅),

la fonction de dépense s’écrit généralement :

  E(p, w, u̅) = p·x̅ + w·t̅ + K· p^(2/3)·w^(1/3)·exp(u̅),

où K = 3·( (2/3)^(–2/3)·(1/3)^(–1/3) ) est une constante déterminée par le modèle (on peut vérifier ce résultat en résolvant le problème dual).

─────────────────────────────

## 3.10. Effets d’un changement du taux de salaire w sur x et l

### 3.10.1. Évolution des quantités

À partir des fonctions Marshalliennes obtenues :

- Pour la demande en consommation (6) :

  x* = x̅ + [2(y + wT – p·x̅ – w·t̅)]/(3p).

D'où :

  ∂x*/∂w = [2(T – t̅)]/(3p) > 0,   c’est-à-dire que la consommation augmente avec w.

- Pour la demande en loisir (5) :

  t* = [y + wT – p·x̅ + 2w·t̅]/(3w).

Calculons la dérivée par rapport à w. En écrivant t* de la façon :

  t* = (1/(3w))·[y + wT – p·x̅ + 2w t̅]      = (y – p·x̅)/(3w) + (T + 2t̅)/3,

alors :

  ∂t*/∂w = – (y – p·x̅)/(3w²).

Donc, si (y – p·x̅) > 0 (cas habituel), t* diminue avec w.

- Pour l’offre de travail l* = T – t* :

  ∂l*/∂w = – ∂t*/∂w = (y – p·x̅)/(3w²) > 0.

Ainsi, une hausse de w tend à :   • Augmenter la consommation x,   • Réduire le temps de loisir t,   • Augmenter l’offre de travail l.

### 3.10.2. La décomposition Slutsky

La relation de Slutsky permet de décomposer la variation totale induite par un changement de prix (ici de w, qui intervient à la fois dans la pente de la contrainte et dans le revenu) en :

  Effet substitution + Effet revenu = variation totale.

Pour le **bien de consommation** x, on peut écrire :

  ∂x*/∂w = (∂hₓ/∂w) – x*₍Z₎·(∂Z/∂w),

où hₓ est la demande compensée (Hicksienne) et la deuxième partie représente l’effet revenu. Analogiquement, pour l’**offre de travail** l, la décomposition s’exprime :

  ∂l*/∂w = (∂hₗ/∂w) + l*₍Z₎·(∂Z/∂w).

Ici, l’augmentation de w entraine un effet substitution incitant à substituer le loisir (devenu plus coûteux) par le travail. Simultanément, l’effet revenu tend à rendre le consommateur plus riche : dans le cas du loisir, un accroissement du revenu favorise la consommation de loisir (effet revenu négatif sur l) et, inversement, pour la consommation, un effet revenu positif.

### 3.10.3. Quantification et interprétation

À partir des dérivées précédentes, nous avons :

- Pour x :   ∂x*/∂w = 2(T – t̅)/(3p). Le terme positif reflète l’effet substitution (la hausse de w incite à travailler davantage afin de financer une consommation supérieure).
    
- Pour l :   ∂l*/∂w = (y – p·x̅)/(3w²). Ici, l’effet substitution est partiellement compensé par l’effet revenu, mais globalement, dans notre spécification, l’offre de travail augmente avec w.
    

L’interprétation est la suivante : – Une augmentation du salaire tend à encourager le travail par l’effet substitution (le loisir devient relativement plus coûteux) ; – Toutefois, l’effet revenu tend à réduire l’offre de travail puisque l’individu est plus riche et peut se permettre plus de loisir. Le signe final positif indique que, dans ce modèle, l’effet substitution domine pour le choix de travail.

─────────────────────────────

## 3.11. Étude d’une politique publique de subvention salariale et taxation du revenu

Soit une politique telle que :

  w′ = w(1 + τ) avec τ > 0,   y′ = y(1 – ε) avec ε > 0,

de sorte que le niveau d’utilité reste inchangé.

### 3.11.1. Impact sur la participation (offre de travail)

L’effet d’une augmentation effective du salaire (w devient w′ > w) tend à accroître l’offre de travail via l’effet substitution (comme discuté en 3.10). Toutefois, la taxation du revenu exogène y tend à réduire le revenu global, ce qui peut également – via l’effet revenu – diminuer le loisir et donc encourager le travail. Dans l’ensemble, la politique tend à augmenter la participation au marché du travail, c.-à-d. l’individu offrira une quantité de travail positive dans des conditions où, autrement, il pourrait opter pour une non‑participation (voir partie 2).

### 3.11.2. Impact sur le niveau de consommation

La subvention salariale fait augmenter le revenu obtenu grâce du travail, alors que la taxation réduit le revenu non lié au travail. En maintenant constant le niveau d’utilité (compensation parfaite au niveau du bien‑être), l’effet net sur la consommation dépend de l’équilibre entre ces deux mesures. Dans le modèle, le fait que le niveau d’utilité reste inchangé signifie que la combinaison optimale (x*, t*) se redéploie de manière à compenser partiellement ces variations. En général, la subvention tend à accroître la consommation via l’augmentation du revenu effectif, même si la taxation partielle du revenu exogène pourrait atténuer cet effet.

### 3.11.3. Équilibre budgétaire de la politique

Pour évaluer l’équilibre budgétaire, il faut comparer :

– Le coût pour l’État de la subvention salariale, qui est :   Coût = τ·w·l* (la subvention payée sur l’ensemble des heures travaillées). – Les recettes issues de la taxation du revenu exogène, qui sont :   Recettes = ε·y.

La politique est budgétairement équilibrée si :

  τ·w·l* = ε·y.

Si cette égalité tient, alors la politique ne crée pas de déficit (elle est neutre du point de vue budgétaire). Si ce n’est pas le cas, l’État devra compenser (par un déficit ou un excédent) et ce déséquilibre devra éventuellement se traduire par des effets supplémentaires sur le comportement des agents.

**Interprétation finale :** Une politique combinant une subvention salarial et une taxation du revenu exogène peut, tout en maintenant le niveau de satisfaction de l’individu, favoriser la participation au marché du travail et augmenter la consommation globale. Cependant, pour être crédible, une telle politique doit être budgétairement équilibrée, c’est-à-dire que les recettes issues de la taxation doivent compenser exactement le coût de la subvention. Ceci illustre la délicatesse des politiques incitatives : les effets sur l’allocation des ressources (et le comportement des agents) dépendent de la confrontation entre effets substitution, effet revenu et contraintes budgétaires.

─────────────────────────────

# Conclusion

Nous avons ainsi traité successivement :

1. Le choix intérieur du consommateur qui équilibre consommation et loisir via la condition TMS = w/p, avec une contrainte budgétaire liant.
2. La situation de possible non‑participation (t = T, l = 0) et les moyens de politique publique pour y remédier (notamment, via des subventions salariales).
3. Le cas particulier de préférences Cobb‑Douglas avec seuils minimaux, permettant d’obtenir explicitement les fonctions de demande Marshalliennes – et, par dualité, Hicksiennes – ainsi que l’analyse de l’effet d’un changement de salaire et des conséquences d’une politique mixte sur le marché du travail et la consommation.