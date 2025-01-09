# Structure d'une table

1. `id_citation`,  `texte` & `id_film`
2. `id_citation` : int,  `texte`: text & `id_film` : int
3.  `nom` : text, `prenom` : text & `age` : int

# Contenu d'une table

1. ```sql
   SELECT texte FROM citations;
   ```
2. ```sql
   SELECT id_citation,texte FROM citations
   ```
3. ```sql
   +---------+--------------+------+-----+---------+-------+
   | Field   | Type         | Null | Key | Default | Extra |
   +---------+--------------+------+-----+---------+-------+
   | id_film | int(11)      | NO   | PRI | NULL    |       |
   | titre   | varchar(100) | YES  |     | NULL    |       |
   | annee   | int(11)      | YES  |     | NULL    |       |
   +---------+--------------+------+-----+---------+-------+
   ```
4. ```sql
   SELECT * FROM films
   ```
5. ```sql
   SELECT * FROM citations WHERE id_citation < 6;
   ```
6. ```sql
   SELECT * FROM citations WHERE texte LIKE '%je%';
   ```
7. ```sql
   SELECT * FROM citations WHERE texte LIKE '%je%' AND texte LIKE '%!';
   ```
8. ```sql
   SELECT * FROM citations WHERE texte LIKE texte LIKE '%est%' AND id_citation < 11;
   ```
9. #### Ça marche 😱😱😱
10. ```sql
    UPDATE citations SET texte = 'C'est dans ses rêves que l'homme trouve la liberté, cela fut, est, et restera la vérité.' WHERE id_citation = 5;
    ```
11. ```sql
    INSERT INTO citations VALUES (16, 'Je suis ton père', 0);
    ```
12. ```sql
    INSERT INTO citations VALUES (16, 'Je suis ton père', 0);
    ```
13. ```sql
    DELETE FROM citations WHERE id_citation = 16,
    ```

# Clé primaire, clé étrangère

1. La clef primaire de la table `films` s'appelle `id_film`.
2. Il exite plusieurs entrées `id_film` de même valeur sur la table `citation`, hors cela est impossible pour une clef primaire.
3. ```sql
   INSERT INTO citations VALUES (12, 'Star Wars V', 1980);
   ```
4. ```sql
   UPDATE citations SET id_film = 12 WHERE id_film = 0;
   ```

# Jointure

1. ```sql
   SELECT texte, titre, annee FROM citations JOIN films ON citations.id_film = films.id_film  WHERE films.annee < 2000;
   ```

# Compléments

1. ```sql
   SELECT titre, annee FROM films ORDER BY titre ASC;
   ```
2. ```sql
   SELECT texte, titre FROM citations JOIN films ON citations.id_film = films.id_film ORDER BY films.annee ASC;
   ```
