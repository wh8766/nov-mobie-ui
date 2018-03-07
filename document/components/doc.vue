<template>
    <div class="main container">
        <div class="nav-container">
            <ul v-for="group in menu" class="group-container">
                <li><h4>{{group.name}}</h4></li>
                <li v-for="m in group.children">
                    <router-link :to="'/doc/'+m.name">{{m.title || m.name}}</router-link>
                </li>
            </ul>
        </div>
        <div class="doc-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import menu from '../menu'

    export default {
        name: "doc-index",
        data() {
            return {
                menu
            }
        },
    }
</script>

<style lang='less' type="text/less">
    .main {
        padding-top: 50px;
    }
    .nav-container {
        padding-top: 15px;
        position: fixed;
        top: 50px;
        bottom: 0;
        width: 200px;
    }
    .group-container {
        padding-left: 10px;

        h4 {
            font-size: 16px;
            color: lightslategrey;
        }

        li {
            list-style: none;
            font-size: 14px;
            line-height: 1.8;

            a {
                display: block;
                padding-left: 20px;
            }
            a.active {
                font-weight: bold;
                background-color: #f5f5f9;
            }
            a:focus, a:hover {
                text-decoration: none;
            }
        }
    }
    .doc-container {
        margin-left: 220px;

        table {
            background-color: white;
        }
        th {
            text-align: left;
        }


        // Baseline styles

        table {
            width: 100%;
            max-width: 100%;
            margin-bottom: 20px;
            // Cells
            > thead,
            > tbody,
            > tfoot {
                > tr {
                    > th,
                    > td {
                        padding: 10px;
                        line-height: 1.2;
                        vertical-align: top;
                        border-top: 1px solid lightgray;
                    }
                }
            }
            // Bottom align for column headings
            > thead > tr > th {
                vertical-align: bottom;
                border-bottom: 2px solid lightgray;
            }
            // Remove top border from thead by default
            > caption + thead,
            > colgroup + thead,
            > thead:first-child {
                > tr:first-child {
                    > th,
                    > td {
                        border-top: 0;
                    }
                }
            }
            // Account for multiple tbody instances
            > tbody + tbody {
                border-top: 2px solid lightgray;
            }
        }


        // Bordered version
        //
        // Add borders all around the table and between all the columns.

        table {
            border: 1px solid lightgray;
            > thead,
            > tbody,
            > tfoot {
                > tr {
                    > th,
                    > td {
                        border: 1px solid lightgray;
                    }
                }
            }
            > thead > tr {
                > th,
                > td {
                    border-bottom-width: 2px;
                }
            }
        }


        // Zebra-striping
        //
        // Default zebra-stripe styles (alternating gray and transparent backgrounds)

        table {
            > tbody > tr:nth-child(odd) {
                > td,
                > th {
                    background-color: whitesmoke;
                }
            }
        }
    }

    /*
    Darcula color scheme from the JetBrains family of IDEs
    */
    .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        background: #282a36;
    }

    .hljs {
        color: #bababa;
    }

    .hljs-strong,
    .hljs-emphasis {
        color: #a8a8a2;
    }

    .hljs-bullet,
    .hljs-quote,
    .hljs-link,
    .hljs-number,
    .hljs-regexp,
    .hljs-literal {
        color: #6896ba;
    }

    .hljs-code,
    .hljs-selector-class {
        color: #a6e22e;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-section,
    .hljs-attribute,
    .hljs-name,
    .hljs-variable {
        color: #cb7832;
    }

    .hljs-params {
        color: #b9b9b9;
    }

    .hljs-string {
        color: #6a8759;
    }

    .hljs-subst,
    .hljs-type,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-symbol,
    .hljs-selector-id,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-addition {
        color: #e0c46c;
    }

    .hljs-comment,
    .hljs-deletion,
    .hljs-meta {
        color: #7f7f7f;
    }
</style>
