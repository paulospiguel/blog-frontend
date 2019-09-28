import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Facebook, WhatsApp, Instagram, LinkedIn } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            PS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Paulo Roberto Spiguel"
        subheader="Fevereiro 16, 1986"
      />
      <CardContent>
        <Typography
          align="justify"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Sou uma pessoa proativa, gosto de trabalhar em equipe e me dou bem com
          pessoas, assimilo bem a pressão do trabalho. Gosto de sempre estar
          lendo bons livros, artigos científicos, e assistir filmes de biografia
          de pessoas que mudaram o mundo. Sempre estou atualizando meus
          conhecimentos. Gosto de atuar em empresas que estão sempre
          incentivando o aperfeiçoamento, aprendizado e interação. Gosto de
          praticar esportes e minha paixão é o futebol e basquetebol. Desde meus
          15 anos trabalho e estudo, minhas maiores virtudes são a alegria,
          otimismo, aprendizagem rápida, e bom relacionamento interpessoal. Meus
          maiores desafios é a gestão de tempo e ansiedade. Sou fã de Steve Jobs
          e sua determinação. Meu maior sonho é ser professor e cientista
          acadêmico em tecnologia.
          <br />
          <br />
        </Typography>
        <Typography variant="alignCenter" color="textSecondary" component="p">
          <blockquote cite="">
            <h3>A frase que mais gosto</h3>
            <p>"Quem detem o conhecimento detem o poder."</p>
            <small>Thomas Hobbes</small>
          </blockquote>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="github">
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
        <IconButton aria-label="linkedin">
          <LinkedIn />
        </IconButton>
        <IconButton aria-label="facebook">
          <Facebook />
        </IconButton>
        <IconButton aria-label="instagram">
          <Instagram />
        </IconButton>
        <IconButton aria-label="whatsapp">
          <WhatsApp />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detalhes:</Typography>
          <Typography paragraph align="justify">
            Atualmento estou focado na área de desenvolvimento na qual atuo à
            mais de 2 anos, trabalhei em diversas empresas tanto públicas como
            privadas, no momento tenhos alguns projetos como freelancer em
            desenvolvimento.
          </Typography>
          <Typography paragraph align="justify">
            Possuo experiência em desenvolvimento de front-end(HTML, CSS,
            Javascript, Jquery) e também possui conhecimentos em
            back-end(Nodejs, PHP, Javascript). Trabalhei por entorno de 10 anos
            em empresa público entre eles atuei como diretor de IT, atuando
            deste a elaboração de projetos de infraestrutura de comunicação de
            dados até a programação de soluções pontuais internas. Atuei na
            coordenação de equipe na realização de projetos de redes (fibra
            ótica, wireless, voip e redes de segurança). Atuei como analista de
            dados em censo demográfico populacional pelo IBGE. Atuei como
            administrador de servidores windows e linux, sistemas de
            distribuidos e gerenciáveis como mikrotik, cacti, zabbix e webmin.
            Utilizo no meu dia a dia soluções como Docker, Git e GitHub, Docz,
            Jest para testes unitários e eslint. Recentemente estou focado em
            programar utilizando as libs ReactJS, React Native e Nodejs, e
            frameworks AdonisJS, CMS como wordpress e em banco de dados utilizo
            o MySQL, PostGres e MongoDB. Sou fundador da Newtech Tecnologia, uma
            emprese de consultoria e desenvolvimento de soluções de software,
            websites e aplicativos mobile.
          </Typography>
          <Typography paragraph align="justify">
            Sou especialista em redes e comunicação de dados e graduado em
            tecnologia de processos gerenciais, tenho diversas certificações e
            participei de vários webinars e bootcamps em tecnologia.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
