import React, { useState } from 'react'

// Next
import { useRouter } from 'next/router'

// Material-UI
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'

// Icons
import { IoLanguageSharp } from 'react-icons/io5'

// Material Styles
import { makeStyles } from '@mui/styles'

// ========================================================================================================

const Menus = () => {
  const classes = useStyles()

  const router = useRouter()

  // ==============================
  //            State
  // ==============================
  const [isMenuOpen, setIsMenuOpen] = useState<null | HTMLElement>(null)

  // ==============================
  //            Events
  // ==============================
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpen(event.currentTarget)
  }

  const handleClose = async () => {
    setIsMenuOpen(null)
  }

  const handleCloseEnglish = async (path: string) => {
    await router.push(path, path, { locale: 'en' })
  }

  const handleCloseFrench = async (path: string) => {
    await router.push(path, path, { locale: 'fr' })
  }

  return (
    <>
      <div
        tabIndex={0}
        onClick={handleClick}
        className={classes.user}
        style={{ position: 'relative', cursor: 'pointer' }}
      >
        <IoLanguageSharp style={{ fontSize: 19 }} />
      </div>

      <Menu
        style={{ position: 'fixed' }}
        id="marketing-menu"
        aria-haspopup="true"
        anchorEl={isMenuOpen}
        keepMounted
        open={Boolean(isMenuOpen)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleCloseEnglish(router.route)}>
          <ListItemText>English</ListItemText>
        </MenuItem>

        <MenuItem onClick={() => handleCloseFrench(router.route)}>
          <ListItemText>Français</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Menus

// ========================================================================================================

const useStyles = makeStyles(() => ({
  user: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))
