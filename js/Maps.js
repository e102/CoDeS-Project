
var levelThree;
var levelX;

levelThree =
    [ [ [ 4, 2, 3, 3, 0 ],
        [ 4, 1, 3, 3, 0 ],
        [ 2, 2, 3, 3, 0 ],
        [ 3, 1, 3, 3, 0 ],
        [ 1, 2, 3, 3, 0 ],
        [ 3, 3, 3, 3, 0 ],
        [ 0, 4, 3, 3, 0 ],
        [ 1, 1, 3, 3, 0 ],
        [ 3, 2, 3, 3, 0 ],
        [ 1, 0, 3, 3, 0 ],
        [ 3, 0, 3, 3, 0 ],
        [ 2, 4, 3, 3, 0 ],
        [ 4, 1, 3, 3, 0 ],
        [ 4, 3, 3, 3, 0 ],
        [ 4, 3, 3, 3, 0 ],
        [ 1, 1, 3, 3, 0 ],
        [ 2, 3, 3, 3, 0 ],
        [ 0, 3, 3, 3, 0 ],
        [ 3, 3, 3, 3, 0 ],
        [ 0, 0, 3, 3, 0 ] ],
        [ [ 1, 4, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ] ],
        [ [ 4, 1, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 1, 2, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ] ],
        [ [ 3, 0, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 1, 2, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ] ],
        [ [ 2, 0, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ] ],
        [ [ 3, 1, 3, 3, 0 ],
            [ 1, 2, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 4, 4, 3, 3, 0 ],
            [ 1, 2, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 4, 4, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ] ],
        [ [ 2, 2, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 1, 0, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 1, 0, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ] ],
        [ [ 2, 1, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ] ],
        [ [ 4, 4, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 4, 4, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 1, 0, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ] ],
        [ [ 4, 0, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ] ],
        [ [ 3, 1, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ] ],
        [ [ 1, 4, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 1, 0, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ] ],
        [ [ 0, 0, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ] ],
        [ [ 3, 3, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 4, 4, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 4, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ] ],
        [ [ 2, 1, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 1, 0, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ] ],
        [ [ 3, 4, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 2, 0, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 1, 0, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 4, 4, 3, 3, 0 ] ],
        [ [ 2, 3, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 4, 0, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 1, 0, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 1, 2, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 2, 1, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ] ],
        [ [ 1, 2, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 4, 4, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 4, 4, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ] ],
        [ [ 2, 3, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 1, 3, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 0, 0, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ],
            [ 3, 2, 3, 3, 0 ],
            [ 3, 4, 3, 3, 0 ],
            [ 3, 3, 3, 3, 0 ],
            [ 4, 4, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 0, 1, 3, 3, 0 ] ],
        [ [ 2, 3, 3, 3, 0 ],
            [ 1, 1, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 1, 4, 3, 3, 0 ],
            [ 2, 3, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 3, 1, 3, 3, 0 ],
            [ 0, 4, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 3, 0, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 4, 2, 3, 3, 0 ],
            [ 4, 1, 3, 3, 0 ],
            [ 4, 3, 3, 3, 0 ],
            [ 2, 4, 3, 3, 0 ],
            [ 0, 3, 3, 3, 0 ],
            [ 1, 0, 3, 3, 0 ],
            [ 1, 0, 3, 3, 0 ],
            [ 0, 2, 3, 3, 0 ],
            [ 2, 2, 3, 3, 0 ] ] ];



levelX = [ [ [ 1, 2, 3, 3, 0 ],
    [ 1, 4, 3, 3, 0 ],
    [ 1, 1, 3, 3, 0 ],
    [ 0, 0, 3, 3, 0 ],
    [ 0, 0, 3, 3, 0 ],
    [ 2, 0, 3, 3, 0 ],
    [ 0, 3, 3, 3, 0 ],
    [ 2, 1, 3, 3, 0 ] ],
    [ [ 4, 3, 3, 3, 0 ],
        [ 2, 0, 3, 3, 0 ],
        [ 0, 0, 3, 3, 0 ],
        [ 4, 4, 3, 3, 0 ],
        [ 2, 1, 3, 3, 0 ],
        [ 2, 3, 3, 3, 0 ],
        [ 1, 4, 3, 3, 0 ],
        [ 4, 2, 3, 3, 0 ] ],
    [ [ 3, 0, 3, 3, 0 ],
        [ 0, 4, 3, 3, 0 ],
        [ 4, 2, 3, 3, 0 ],
        [ 4, 0, 3, 3, 0 ],
        [ 0, 2, 3, 3, 0 ],
        [ 2, 4, 3, 3, 0 ],
        [ 0, 2, 3, 3, 0 ],
        [ 4, 4, 3, 3, 0 ] ],
    [ [ 1, 1, 3, 3, 0 ],
        [ 0, 1, 3, 3, 0 ],
        [ 2, 0, 3, 3, 0 ],
        [ 4, 0, 3, 3, 0 ],
        [ 3, 2, 3, 3, 0 ],
        [ 1, 2, 3, 3, 0 ],
        [ 0, 0, 3, 3, 0 ],
        [ 3, 4, 3, 3, 0 ] ],
    [ [ 4, 1, 3, 3, 0 ],
        [ 3, 2, 3, 3, 0 ],
        [ 4, 2, 3, 3, 0 ],
        [ 0, 1, 3, 3, 0 ],
        [ 4, 0, 3, 3, 0 ],
        [ 1, 0, 3, 3, 0 ],
        [ 3, 0, 3, 3, 0 ],
        [ 1, 4, 3, 3, 0 ] ],
    [ [ 2, 0, 3, 3, 0 ],
        [ 4, 3, 3, 3, 0 ],
        [ 4, 2, 3, 3, 0 ],
        [ 2, 4, 3, 3, 0 ],
        [ 1, 4, 3, 3, 0 ],
        [ 4, 4, 3, 3, 0 ],
        [ 4, 4, 3, 3, 0 ],
        [ 2, 2, 3, 3, 0 ] ],
    [ [ 3, 2, 3, 3, 0 ],
        [ 3, 0, 3, 3, 0 ],
        [ 1, 3, 3, 3, 0 ],
        [ 4, 1, 3, 3, 0 ],
        [ 4, 3, 3, 3, 0 ],
        [ 0, 1, 3, 3, 0 ],
        [ 3, 3, 3, 3, 0 ],
        [ 0, 1, 3, 3, 0 ] ],
    [ [ 2, 1, 3, 3, 0 ],
        [ 4, 0, 3, 3, 0 ],
        [ 2, 3, 3, 3, 0 ],
        [ 3, 1, 3, 3, 0 ],
        [ 2, 2, 3, 3, 0 ],
        [ 3, 2, 3, 3, 0 ],
        [ 4, 4, 3, 3, 0 ],
        [ 2, 2, 3, 3, 0 ] ] ];


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setToDefault(level) {
    for(var i = 0; i < level.length; i++) {
        for(var j = 0; j < level[i].length; j++) {
            level[i][j][0] = getRandomIntInclusive(0, 4);
            level[i][j][1] = getRandomIntInclusive(0, 4);
            level[i][j][2] = 3;
            level[i][j][3] = 3;
            level[i][j][4] = 0;
            //level[i][j].push(0)

        }
    }

}

//setToDefault(levelX);
//console.log(levelX);