xtag-dropdown
=============

This is a dropdown menu element, It is build to be esay to use and flexible.

Example:

```html
<x-dropdown id="x-dropdown" data-width="200">
    <ul>
        <li><a href="#" data-action-type="openMenu">[show menu]</a>
            <ul selected="false" orgentation="" distance="">
                <li><a>1nd lev - 1</a></li>
                <li><a>2nd lev - 2</a></li>
                <li><a>1nd lev - 3</a></li>
                <li><a>1nd lev - 4</a></li>
                <li>
                    <ul>
                        <li><a href="#" data-action-type="openMenu">[show sub]</a>
                            <ul selected="false" orgentation="right" distance="20">
                                <li><a>1nd lev - 1</a></li>
                                <li><a>2nd lev - 2</a></li>
                                <li><a>1nd lev - 3</a></li>
                                <li><a>1nd lev - 4</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</x-dropdown>
```


