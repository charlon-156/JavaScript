use cadastro;
create table cursos(
idcurso int auto_increment not null,
nome varchar(20) not null unique,
descricao text,
carga int unsigned,
totalaula int unsigned,
ano year,
primary key(idcurso)
) default charset = utf8;

insert into cursos values 
(default, 'HTML4','Curso de HTML 5', '40','37','2014'),
(default, 'Algoritmos','Lógica de programação', '20','15','2014'),
(default, 'Photoshop','Dicas de photoshop CC', '10','8','2014'),
(default, 'PGP','Curso de PHP para iniciantes', '40','20','2010'),
(default, 'Jarva','Introdução à linguagem Java', '10','29','2000'),
(default, 'MySQL','Banco de Dados MySQL', '30','15','2016'),
(default, 'Word','Curso completo de Word', '40','30','2015'),
(default, 'Sapateado','Dança rítmicas', '40','30','2018'),
(default, 'Cozinha Árabe','Aprendendo a fazer kib', '40','30','2018'),
(default, 'Youtube','Gerar polêmicas e ganhar inscritos', '5','2','2018');

update cursos set nome='HTML 5' where idcurso='1';
update cursos set nome='PHP', ano='2015' where idcurso='4';
update cursos set nome='Java', carga='40', ano='2015' where idcurso='5';

delete from cursos where idcurso='8';
delete from cursos where idcurso='9';
delete from cursos where idcurso='10';

select * from cursos;

alter table gafanhotos
add curso_preferido int(11);

alter table gafanhotos
add foreign key(curso_preferido)
references cursos(idcurso);

desc gafanhotos;
desc cursos;

select * from gafanhotos;
select * from cursos;

select gafanhotos.nome, cursos.nome, cursos.ano
from gafanhotos left join cursos
on cursos.idcurso = gafanhotos.curso_preferido;

