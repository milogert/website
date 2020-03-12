module Pages.Blog exposing (view)

import Bulma.Elements exposing (content)
import Bulma.Modifiers exposing (Size(..))
import Html exposing (Html, text)
import Markdown.Block exposing (Block)
import Markdown.Html
import Markdown.Parser as Markdown
import Model exposing (Model, Msg(..))


view : Model -> List (Html Msg)
view model =
    case
        testSource
            |> Markdown.parse
            |> Result.mapError deadEndsToString
            |> Result.andThen (\ast -> Markdown.render Markdown.defaultHtmlRenderer ast)
    of
        Ok rendered ->
            [ content Bulma.Modifiers.Standard
                []
                rendered
            ]

        Err errors ->
            [ text errors ]


deadEndsToString deadEnds =
    deadEnds
        |> List.map Markdown.deadEndToString
        |> String.join "\n"


testSource : String
testSource =
    """# Header

This is some other stuff.

## Important code!

Some `inline code here`!

```javascript
const test = () => 10
```

## Another header

### First list

- list item
- list item 2
- TEST

### Final list

1. Uno
2. Dos
3. Tres
"""
