import { Avatar, Box, Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from "@mui/material";
import { ContactInfos } from "../../data/ContactInfos";

const InfoBox = () => {
    const defineHref = (content, id) => {
        if (id === 2) return `mailto:${content}`;
        else if (id === 3) {
          const phoneNumber = content.replace(/\D/g, '');
          return `tel:+${phoneNumber}`;
        } else return content;
      };
      
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {ContactInfos.map((content, id) => (
        <Card sx={{ maxWidth: '370px', padding: '25px 0 8px', boxShadow: 'none', borderRadius: '0' }} key={id}>
          <CardContent sx={{ padding: '0', '&:last-child': { padding: 0 } }}>
            <Avatar sx={{ backgroundColor: "rgba(255, 180, 0, 1)", margin: '0 auto 15px' }}>
              <content.icon sx={{ color: '#000' }} />
            </Avatar>
            <TableContainer component={Paper} elevation={0}>
              <Table aria-label="simple table">
                <TableBody>
                  {content.rows.map((row) => (
                    <TableRow key={row.title} sx={{ 'td, th': { border: 0 } }}>
                      <TableCell component="th" scope="row" sx={{ fontWeight: "500", fontSize: '15px', color: "rgba(118, 118, 118, 1)", padding: '8px 0 16px 25px', textWrap: "nowrap" }}>{`${row.title}:`}</TableCell>
                      <TableCell align="right" sx={{ fontSize: "15px", padding: '8px 25px', textWrap: "nowrap" }}>
                        <Link href={defineHref(row.info, id)} underline="none" sx={{ color: 'rgba(118, 118, 118, 1)' }}>{row.info}</Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default InfoBox;
