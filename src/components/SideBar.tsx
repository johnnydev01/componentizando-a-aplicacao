import { useState } from "react";
import { Button } from "./Button"

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

type SideBarProps = {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void
}


export function SideBar(props: SideBarProps) {

  const [selectedGenreId, setSelectedGenreId] = useState(1);


  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
  </nav>
  )
}