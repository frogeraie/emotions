 $(document).ready(function () {
            // Left demo
            $('.example-left').on({
                'cycle': console.log.bind(console, 'example-left', 'cycle'),
                'pause': console.log.bind(console, 'example-left', 'pause'),
                'resume': console.log.bind(console, 'example-left', 'resume'),
                'finish': console.log.bind(console, 'example-left', 'finish')
            });
            $('.example-left').simplemarquee();
           
        });
