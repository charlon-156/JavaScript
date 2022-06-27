select nome, totaulas, ano from cursos
where ano in (2010,2012,2016)
order by ano;

select nome, totaulas, ano from cursos
where ano between 2016 and 2020
order by ano;

select * from gafanhotos where sexo = 'F' and nacionalidade <> 'brasil';

select nome from gafanhotos where sexo = 'F';
select * from gafanhotos where nascimento between '2000-01-01' and '2015-12-31';
select nome from gafanhotos where sexo = 'M' and profissao = 'programador';
select * from gafanhotos where sexo = 'F' and nacionalidade = 'Brasil' and nome like 'J%';
select nome, nacionalidade from gafanhotos where sexo = 'M' and nacionalidade != 'Brasil' and nome like '%Silva%' and peso <= 100;
select max(altura) from gafanhotos where sexo = 'M' and nacionalidade = 'Brasil';
select avg(peso) from gafanhotos;
select  * from gafanhotos where sexo = 'F' and nacionalidade <> 'Brasil' and nascimento between 1990-01-01 and 2000-12-31;