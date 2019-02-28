using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageboardBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        static List<Models.Message> listMessages = new List<Models.Message>
        {
             new Models.Message
                {
                    Text="Hello",
                    Owner="John"
                },
                new Models.Message
                {
                    Text="Hi",
                    Owner="Tim"
                }
        };

        public IEnumerable<Models.Message> Get()
        {
            return listMessages;
        }

        [HttpPost]
        public Models.Message Post([FromBody] Models.Message message)
        {
            listMessages.Add(message);
            return message;
        }
    }
}