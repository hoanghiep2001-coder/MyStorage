import React, { } from "react";
import LibraryHeader from "./Components/LibraryHeader/LibraryHeader";
import LibraryContent from "./Components/LibraryContent/LibraryContent";


interface LibraryProps {

}

const Library: React.FC<LibraryProps> = () => {

    return (
        <div className="container">
            <LibraryHeader suggestItems={["Playlist", "Artists", "Albums", "Podcasts"]}/>
            <LibraryContent />
        </div>
    );
}

export default Library;