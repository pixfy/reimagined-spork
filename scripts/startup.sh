#!/bin/bash

USER='root'
PASS='password'
HOST='127.0.0.1'
DBASE='reimagined_spork'

mysql -u$USER -p$PASS -h$HOST << EOF
    CREATE DATABASE IF NOT EXISTS reimagined_spork;

    USE reimagined_spork;

    CREATE TABLE heroes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        imagem VARCHAR(255)
    );

    INSERT INTO heroes (id, name, imagem) VALUES
    (1, 'Bruce Wayne', 'https://findicons.com/files/icons/1293/the_batman_vol_1/256/batman.png'),
    (2, 'Clark Kent', 'https://pbs.twimg.com/profile_images/601422345559998464/xKpEHowg_400x400.jpg'),
    (3, 'Diana Prince', 'https://pbs.twimg.com/profile_images/654516693192982529/SLGHsSvk_400x400.jpg'),
    (4, 'Barry Allen', 'https://pm1.narvii.com/6315/c9abcf0c685ff1424f16354d04af07c16c1efb9b_128.jpg');
EOF


