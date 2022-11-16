const dotenv = require('dotenv');
dotenv.config();

const Mailjet = require('node-mailjet');

const htmlBody = "<!DOCTYPE html>\n" +
	"<html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n" +
	"<head>\n" +
	"  <meta charset=\"UTF-8\">\n" +
	"  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n" +
	"  <meta name=\"x-apple-disable-message-reformatting\">\n" +
	"  <title></title>\n" +
	"  <!--[if mso]>\n" +
	"  <noscript>\n" +
	"    <xml>\n" +
	"      <o:OfficeDocumentSettings>\n" +
	"        <o:PixelsPerInch>96</o:PixelsPerInch>\n" +
	"      </o:OfficeDocumentSettings>\n" +
	"    </xml>\n" +
	"  </noscript>\n" +
	"  <![endif]-->\n" +
	"  <style>\n" +
	"    table, td, div, h1, p {font-family: Arial, sans-serif;}\n" +
	"  </style>\n" +
	"</head>\n" +
	"<body style=\"margin:0;padding:0;\">\n" +
	"  <table role=\"presentation\" style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;\">\n" +
	"    <tr>\n" +
	"      <td align=\"center\" style=\"padding:0;\">\n" +
	"        <table role=\"presentation\" style=\"width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;\">\n" +
	"          <tr>\n" +
	"            <td align=\"center\" style=\"padding:40px 0 30px 0;background:#70bbd9;\">\n" +
	"              <img src=\"https://assets.codepen.io/210284/h1.png\" alt=\"\" width=\"300\" style=\"height:auto;display:block;\" />\n" +
	"            </td>\n" +
	"          </tr>\n" +
	"          <tr>\n" +
	"            <td style=\"padding:36px 30px 42px 30px;\">\n" +
	"              <table role=\"presentation\" style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;\">\n" +
	"                <tr>\n" +
	"                  <td style=\"padding:0 0 36px 0;color:#153643;\">\n" +
	"                    <h1 style=\"font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;\">Creating Email Magic</h1>\n" +
	"                    <p style=\"margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan et dictum, nisi libero ultricies ipsum, posuere neque at erat.</p>\n" +
	"                    <p style=\"margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\"><a href=\"http://www.example.com\" style=\"color:#ee4c50;text-decoration:underline;\">In tempus felis blandit</a></p>\n" +
	"                  </td>\n" +
	"                </tr>\n" +
	"                <tr>\n" +
	"                  <td style=\"padding:0;\">\n" +
	"                    <table role=\"presentation\" style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;\">\n" +
	"                      <tr>\n" +
	"                        <td style=\"width:260px;padding:0;vertical-align:top;color:#153643;\">\n" +
	"                          <p style=\"margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\"><img src=\"https://assets.codepen.io/210284/left.gif\" alt=\"\" width=\"260\" style=\"height:auto;display:block;\" /></p>\n" +
	"                          <p style=\"margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, est nisi libero ultricies ipsum, in posuere mauris neque at erat.</p>\n" +
	"                          <p style=\"margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\"><a href=\"http://www.example.com\" style=\"color:#ee4c50;text-decoration:underline;\">Blandit ipsum volutpat sed</a></p>\n" +
	"                        </td>\n" +
	"                        <td style=\"width:20px;padding:0;font-size:0;line-height:0;\">&nbsp;</td>\n" +
	"                        <td style=\"width:260px;padding:0;vertical-align:top;color:#153643;\">\n" +
	"                          <p style=\"margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\"><img src=\"https://assets.codepen.io/210284/right.gif\" alt=\"\" width=\"260\" style=\"height:auto;display:block;\" /></p>\n" +
	"                          <p style=\"margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\">Morbi porttitor, eget est accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed.</p>\n" +
	"                          <p style=\"margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;\"><a href=\"http://www.example.com\" style=\"color:#ee4c50;text-decoration:underline;\">In tempus felis blandit</a></p>\n" +
	"                        </td>\n" +
	"                      </tr>\n" +
	"                    </table>\n" +
	"                  </td>\n" +
	"                </tr>\n" +
	"              </table>\n" +
	"            </td>\n" +
	"          </tr>\n" +
	"          <tr>\n" +
	"            <td style=\"padding:30px;background:#ee4c50;\">\n" +
	"              <table role=\"presentation\" style=\"width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;\">\n" +
	"                <tr>\n" +
	"                  <td style=\"padding:0;width:50%;\" align=\"left\">\n" +
	"                    <p style=\"margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;\">\n" +
	"                      &reg; Someone, Somewhere 2021<br/><a href=\"http://www.example.com\" style=\"color:#ffffff;text-decoration:underline;\">Unsubscribe</a>\n" +
	"                    </p>\n" +
	"                  </td>\n" +
	"                  <td style=\"padding:0;width:50%;\" align=\"right\">\n" +
	"                    <table role=\"presentation\" style=\"border-collapse:collapse;border:0;border-spacing:0;\">\n" +
	"                      <tr>\n" +
	"                        <td style=\"padding:0 0 0 10px;width:38px;\">\n" +
	"                          <a href=\"http://www.twitter.com/\" style=\"color:#ffffff;\"><img src=\"https://assets.codepen.io/210284/tw_1.png\" alt=\"Twitter\" width=\"38\" style=\"height:auto;display:block;border:0;\" /></a>\n" +
	"                        </td>\n" +
	"                        <td style=\"padding:0 0 0 10px;width:38px;\">\n" +
	"                          <a href=\"http://www.facebook.com/\" style=\"color:#ffffff;\"><img src=\"https://assets.codepen.io/210284/fb_1.png\" alt=\"Facebook\" width=\"38\" style=\"height:auto;display:block;border:0;\" /></a>\n" +
	"                        </td>\n" +
	"                      </tr>\n" +
	"                    </table>\n" +
	"                  </td>\n" +
	"                </tr>\n" +
	"              </table>\n" +
	"            </td>\n" +
	"          </tr>\n" +
	"        </table>\n" +
	"      </td>\n" +
	"    </tr>\n" +
	"  </table>\n" +
	"</body>\n" +
	"</html>";

const senderMessageMailJet = [
	{
		From: {                Email: "parathan.thiyagalingam@velaris.io",
			Name: "Parathan Thiyagaingam"
		},
		To: [
			{
				Email: "para1235886@gmail.com",
				Name: "passenger 1"
			}
		],
		Subject: "Sending message with mailjet",
		TextPart: "Dear receier, Welcome to Mailjet! May the delivery force be with you!",
		HTMLPart: htmlBody
	},
	{
		From: {
			Email: "parathan.thiyagalingam@velaris.io",
			Name: "Parathan Thiyagaingam"
		},
		To: [
			{
				Email: "stlparathan@yahoo.com",
				Name: "passenger 1"
			}
		],
		Subject: "Sending message with mailjet",
		TextPart: "Dear receier, Welcome to Mailjet! May the delivery force be with you!",
		HTMLPart: htmlBody
	},
	{
		From: {
			Email: "parathan.thiyagalingam@velaris.io",
			Name: "Parathan Thiyagaingam"
		},
		To: [
			{
				Email: "IT19125176@my.sliit.lk",
				Name: "Parathan Thiyagaingam"
			}
		],
		Subject: "Sending message with mailjet",
		TextPart: "Dear receier, Welcome to Mailjet! May the delivery force be with you!",
		HTMLPart: htmlBody
	},
	{
		From: {
			Email: "parathan.thiyagalingam@velaris.io",
			Name: "Parathan Thiyagaingam"
		},
		To: [
			{
				Email: "parathan98@hotmail.com",
				Name: "passenger 1"
			}
		],
		Subject: "Sending message with mailjet",
		TextPart: "Dear receier, Welcome to Mailjet! May the delivery force be with you!",
		HTMLPart: htmlBody
	},
	{
		From: {
			Email: "parathan.thiyagalingam@velaris.io",
			Name: "Parathan Thiyagaingam"
		},
		To: [
			{
				Email: "chathura.velaris@gmail.com",
				Name: "passenger 1"
			}
		],
		Subject: "Sending message with mailjet",
		TextPart: "Dear receier, Welcome to Mailjet! May the delivery force be with you!",
		HTMLPart: htmlBody
	}
]

const client = Mailjet
	.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET)

client
    .post('send', { version: 'v3.1' })
	.request({
    Messages: senderMessageMailJet
    })
	.then(response => {
		console.log('Email sent in MailJet:', response.body)
	})
	.catch(err => {
		console.log('error => ', err)
	})