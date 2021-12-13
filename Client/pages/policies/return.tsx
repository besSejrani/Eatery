import React from "react";

// Material-UI
import { Container, Box, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

//===================================================================================

const GeneralCondition = () => {
  const classes = useStyles();

  return (
    <Container>
      <AppBar position="relative" style={{ margin: "100px auto 20px auto" }}>
        <Toolbar>
          <Typography variant="h6">Return Policy</Typography>
        </Toolbar>
      </AppBar>

      <Box className={classes.block}>
        <Typography variant="h4">RETOURS</Typography>
        <Typography variant="body2" className={classes.paragraph}>
          Notre politique dure 30 jours. Si plus de 30 jours se sont écoulés depuis votre achat, nous ne pouvons
          malheureusement offrir ni remboursement ni échange. Pour pouvoir être retourné, votre article doit être
          inutilisé et dans l'état où vous l'avez reçu. Il doit aussi être dans son emballage d'origine. Le retour de
          certains types de marchandises n'est pas autorisé. Ainsi, les denrées périssables, telles que les aliments,
          les fleurs, les journaux ou les magazines, ne peuvent pas être retournées. De même, nous n'acceptons pas les
          produits intimes ou sanitaires, les matières ou substances dangereuses, ni les liquides ou les gaz
          inflammables. Autres articles dont le retour n'est pas autorisé : * Cartes-cadeaux * Logiciels téléchargeables
          * Certains produits de santé et de soin personnel Pour compléter votre retour, nous exigeons un reçu ou une
          preuve d'achat.Ne retournez pas votre achat au fabricant. Dans certains cas, seuls des remboursements partiels
          sont accordés : (le cas échéant) * Livres montrant des signes d'utilisation évidents * CD, DVD, cassettes VHS,
          logiciels, jeux vidéo, cassettes audio ou disques en vinyle ayant été ouverts. * Tout article qui n'est pas
          dans son état d'origine, qui est endommagé ou auquel il manque des pièces pour une raison non due à une erreur
          de notre part. * Tout article retourné plus de 30 jours après sa livraisonRemboursements (le cas échéant) Une
          fois votre retour reçu et inspecté, nous vous adresserons un e-mail pour vous indiquer que nous avons reçu
          l'article retourné. Nous vous préciserons également si votre remboursement est approuvé ou refusé. S'il est
          approuvé, votre remboursement est alors traité et votre carte de crédit ou moyen de paiement initial se voit
          crédité(e) automatiquement dans un délai de quelques jours.
        </Typography>
      </Box>
      <Box className={classes.block}>
        <Typography variant="h4">Remboursements retardés ou manquants (le cas échéant)</Typography>
        <Typography variant="body2" className={classes.paragraph}>
          Si vous n'avez pas encore reçu de remboursement, revérifiez d'abord votre compte bancaire. Puis contactez la
          société émettrice de votre carte de crédit, car il se peut que l'affichage officiel de votre remboursement
          prenne un peu de temps. Ensuite, contactez votre banque. L'affichage d'un remboursement est souvent précédé
          d'un délai de traitement. Si vous avez effectué toutes ces démarches et que vous n'avez toujours pas reçu
          votre remboursement, contactez-nous à l'adresse suivante : eatery@contact.com.Articles soldés ou en promotion
          (le cas échéant) Seuls les articles à prix normal sont remboursables. Malheureusement, les articles soldés ou
          en promotion ne le sont pas.
        </Typography>
      </Box>
      <Box className={classes.block}>
        <Typography variant="h4"> Échanges (le cas échéant)</Typography>
        <Typography variant="body2" className={classes.paragraph}>
          Nous ne remplaçons que les articles initialement défectueux ou endommagés. Si vous devez remplacer le vôtre
          par le même article, adressez-nous un e-mail à eatery@contact.com et envoyez votre article à : Rue de la
          Corsaz 23, Montreux, VD, 1820, Switzerland.
        </Typography>
      </Box>
      <Box className={classes.block}>
        <Typography variant="h4">Cadeaux</Typography>
        <Typography variant="body2" className={classes.paragraph}>
          Si l'article a été marqué comme cadeau au moment de l'achat et s'il vous a été expédié directement, vous
          recevrez un crédit cadeau d'une valeur équivalente à celle de l'article retourné. Une fois l'article retourné
          reçu, un bon cadeau vous sera envoyé par voie postale. Si l'article n'a pas été marqué comme cadeau au moment
          de l'achat, ou si la personne à l'origine du cadeau s'est fait envoyer la commande dans le but de vous la
          remettre plus tard, c'est à elle que nous adresserons le remboursement et elle saura donc que vous avez
          retourné son cadeau.Expédition Pour retourner votre produit, vous devez l'envoyer à l'adresse postale suivante
          : Rue de la Corsaz 23, Montreux, VD, 1820, Switzerland. Les coûts d'expédition liés au retour de votre article
          sont à votre charge. Ils ne sont pas remboursables. Si vous recevez un remboursement, le coût d'expédition du
          retour en sera déduit. Selon l'endroit où vous vivez, le délai de réception de votre produit échangé peut
          varier. Si vous expédiez un article d'une valeur supérieure à 75 €, nous vous recommandons d'utiliser un
          service de suivi d'expédition ou de faire assurer votre envoi. Nous ne garantissons pas que nous recevrons
          l'article retourné.
        </Typography>
      </Box>
    </Container>
  );
};

export default GeneralCondition;

//===================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      margin: "20px 0px",
    },

    paragraph: {
      margin: "20px 0px",
      textAlign: "justify",
      textJustify: "inter-word",
    },
  }),
);
