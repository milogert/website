module Pages.Projects.ImageGallery exposing (render)

import Gallery exposing (..)
import Gallery.Image as Image
import Html exposing (Html, span)
import Model exposing (Msg(..), PinnedRepo)


render : PinnedRepo -> Html Msg
render project =
    case project.gallery of
        Nothing ->
            span [] []

        Just gallery ->
            Html.map (ImageGalleryMsg project) <|
                Gallery.view
                    (imageConfig project.name)
                    gallery
                    [ Gallery.Arrows ]
                    (generateGallerySlides project.screenshots)


imageConfig : String -> Gallery.Config
imageConfig projectName =
    Gallery.config
        { id = projectName ++ "-image-gallery"
        , transition = 500
        , width = Gallery.vw 60
        , height = Gallery.rem 30
        }


generateGallerySlides : List String -> List ( String, Html Gallery.Msg )
generateGallerySlides screenshots =
    screenshots
        |> List.map (\u -> ( u, Image.slide u Image.Contain ))
