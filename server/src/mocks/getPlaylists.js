export default {
  playlists: [
    {
      id: "123e4567-e89b-12d3-a456-426614174002",
      title: "Мне нравится",
      playlistsCover: "server/src/mocks/playlistImg/playlist-liked.png",
      songIds: [
        "123e4567-e89b-12d3-a456-426614174000",
        "123e4567-e89b-12d3-a456-426614174004"
      ],
      isLikedPlaylist: true
    },
    {
      id: "123e4567-e89b-12d3-a456-426614174003",
      title: "Часто слушаю",
      playlistsCover: "server/src/mocks/playlistImg/playlist2.jpg",
      songIds: ["123e4567-e89b-12d3-a456-426614174000"],
      isLikedPlaylist: false
    }
  ]
};
