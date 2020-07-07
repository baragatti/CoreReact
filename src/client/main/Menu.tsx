import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import {NameToken} from '../../modules/NameToken';
import {useHistory} from 'react-router-dom';

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    cursor: 'pointer',
  },
  itemMenu: {
    paddingLeft: 24,
    '@global': {
      '.MuiTypography-root': {
        fontSize: 13,
        color: '#282828',
      },
    },
  },
  itemMenuGrupo: {
    '@global': {
      '.MuiTypography-root': {
        fontWeight: 'bold',
      },
    },
  },
  itemMenuSelecionado: {
    '@global': {
      '.MuiTypography-root': {
        color: '#03a9f4',
      },
    },
  },
}));

export interface ItemMenu {
  nome: string;
  nameToken?: NameToken;
  action?: () => void;
  itens?: ItemMenu[];
}

const itensMenu: ItemMenu[] = [
  {nome: 'Consulta de exemplo', nameToken: NameToken.EXEMPLO_CONSULTA},
  {nome: 'Cadastro de exemplo', nameToken: NameToken.EXEMPLO_CADASTRO},
];

const itensMenuInferior: ItemMenu[] = [
  {nome: 'Sair', action: () => null},
];

const MenuItemComponent = (props: { item: ItemMenu }) => {
  const {item} = props;
  const classes = useStyles();
  const history = useHistory();

  const onClickMenu = () => {
    if (item.action) {
      item.action();
    } else {
      history.push(item.nameToken.endpoint);
    }
  };

  return (
    <ListItem
      className={`${classes.itemMenu} ${classes.itemMenuGrupo}`}
      button
    >
      <ListItemText
        primary={item.nome}
        onClick={onClickMenu}
      />
    </ListItem>
  );
};

const Menu: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div className={classes.toolbar}>
        <img
          src={require('../../images/logo.png')}
          alt="VendasExternas"
          className={classes.logo}
          onClick={() => history.push('/')}
        />
      </div>
      <Divider/>
      <List>
        {itensMenu.map((item, index) => (
          <MenuItemComponent key={'item-' + index} item={item}/>
        ))}
      </List>
      <Divider/>
      <List>
        {itensMenuInferior.map((item, index) => (
          <MenuItemComponent key={'item-inferior-' + index} item={item}/>
        ))}
      </List>
    </div>
  );
};

export default Menu;
