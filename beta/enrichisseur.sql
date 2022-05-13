CREATE TABLE Utilisateur(
   Id_Utilisateur INT,
   Nom_Utilisateur VARCHAR(50) NOT NULL,
   Prénom VARCHAR(50) NOT NULL,
   Date_Naissance DATE NOT NULL,
   Adresse VARCHAR(250),
   Téléphone VARCHAR(50),
   CP VARCHAR(10) NOT NULL,
   Ville VARCHAR(50) NOT NULL,
   Couriel VARCHAR(250) NOT NULL,
   PRIMARY KEY(Id_Utilisateur)
);

CREATE TABLE Suggestion(
   Id_Suggestion INT,
   Nom_Suggestion VARCHAR(50) NOT NULL,
   Date_Suggestion DATE NOT NULL,
   PRIMARY KEY(Id_Suggestion)
);

CREATE TABLE Môt_Clé(
   Id_MotCle INT,
   Nom_MotCle VARCHAR(50) NOT NULL,
   Date_MotCle DATE NOT NULL,
   Id_Utilisateur INT NOT NULL,
   PRIMARY KEY(Id_MotCle),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Catégorie(
   Id_Catégorie INT,
   Libellé VARCHAR(50) NOT NULL,
   Nom_Categorie VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_Catégorie)
);

CREATE TABLE Phrase(
   Id_Phrase INT,
   Date_Creation DATE NOT NULL,
   Id_Utilisateur INT NOT NULL,
   Id_MotCle INT NOT NULL,
   PRIMARY KEY(Id_Phrase),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur),
   FOREIGN KEY(Id_MotCle) REFERENCES Môt_Clé(Id_MotCle)
);

CREATE TABLE Terme(
   Id_Terme INT,
   Nom_Terme VARCHAR(50) NOT NULL,
   Id_Phrase INT NOT NULL,
   Id_Catégorie INT NOT NULL,
   Id_Utilisateur INT NOT NULL,
   PRIMARY KEY(Id_Terme),
   FOREIGN KEY(Id_Phrase) REFERENCES Phrase(Id_Phrase),
   FOREIGN KEY(Id_Catégorie) REFERENCES Catégorie(Id_Catégorie),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);

CREATE TABLE Faire(
   Id_Utilisateur INT,
   Id_Suggestion INT,
   PRIMARY KEY(Id_Utilisateur, Id_Suggestion),
   FOREIGN KEY(Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur),
   FOREIGN KEY(Id_Suggestion) REFERENCES Suggestion(Id_Suggestion)
);

CREATE TABLE Être(
   Id_Suggestion INT,
   Id_Catégorie INT,
   PRIMARY KEY(Id_Suggestion, Id_Catégorie),
   FOREIGN KEY(Id_Suggestion) REFERENCES Suggestion(Id_Suggestion),
   FOREIGN KEY(Id_Catégorie) REFERENCES Catégorie(Id_Catégorie)
);
