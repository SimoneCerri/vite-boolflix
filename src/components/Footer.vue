<script>
export default
    {
        name: "Footer",
    }
</script>

<template>
    <div id="footer">
        <div class="left_footer">
            <h4>
                <strong>
                    Create by:
                </strong>
            </h4>
            <ul>
                <li>
                    <a href="#profile">
                        Simone Cerri
                    </a>
                </li>
                <li>
                    <a href="#">
                        Google-search
                    </a>
                </li>
                <li>
                    <a href="#">
                        -----
                    </a>
                </li>
                <li>
                    <a href="#">
                        -----
                    </a>
                </li>
            </ul>
        </div>
        <div class="right_footer">
            <h4>
                <strong>
                  Find us on:  
                </strong>
            </h4>
            <ul>
                <li><a href="#facebook"><i class="fa-brands fa-square-facebook" style="color: #ffffff;"></i></a>
                </li>
                <li><a href="#instagram"><i class="fa-brands fa-instagram" style="color: #ffffff;"></i></a></li>
                <li><a href="#twitter"><i class="fa-brands fa-square-twitter" style="color: #ffffff;"></i></a></li>
                <li><a href="#youtube"><i class="fa-brands fa-youtube" style="color: #ffffff;"></i></a></li>
                <li><a href="#pinterest"><i class="fa-brands fa-square-pinterest" style="color: #ffffff;"></i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
#footer {
    background-color: black;
    height: 120px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    h4
    {
        color: rgb(255, 145, 0);
        margin-bottom: 1em
    }

    li
    {
        list-style: none;
        a {
            text-decoration: none;
            color: white;
            
        }
    }

    .left_footer {
        flex-basis: 20%;
        
        ul 
        {
            display: flex;
            flex-direction: column;
            
        }
    }

    .right_footer {
        flex-basis: 20%;
        
        ul 
        {
            display: flex;
            justify-content: center;

            li 
            {
                padding: 0.5em;
            }
        }
    }
}
</style>