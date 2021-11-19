import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

const NavComponents = () => {
    {
        icon: { HomeIcon }
        title: "Home"
        Link: "/home"
    }
    {
        icon: { SearchIcon }
        title: "Search"
        Link: "/search"
    }
    {
        icon: { LibraryAddIcon }
        title: "Library"
        Link: "/library"
    }
    {
        icon: { AddToPhotosIcon }
        title: "Created Playlist"
        Link: "/createdplaylist"
    }
    {
        icon: { FavoriteIcon }
        title: "Liked Songs"
        Link: "/likedsongs"
    }
}

export default NavComponents