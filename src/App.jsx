import productDesktop from '../src/assets/images/image-product-desktop.jpg';
import productMobile from '../src/assets/images/image-product-mobile.jpg';
import { Button, Card, ConfigProvider, Flex, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './App.css';

function App() {
	return (
		<Card
			hoverable
			styles={{
				body: {
					padding: 0,
					overflow: 'hidden',
					borderRadius: '10px',
				},
			}}
			className="card-product"
		>
			<Flex justify="flex-start" className="mobile">
				<img
					alt="product-desktop"
					src={productDesktop}
					className="imgDesktop"
				/>
				<img
					alt="product-mobile"
					src={productMobile}
					style={{ width: '100%', height: 'auto' }}
					className="imgMobile"
				/>
				<Flex
					vertical
					align="flex-start"
					justify="space-between"
					className="description"
				>
					<Typography.Title
						level={3}
						style={{
							fontFamily: 'Montserrat',
							color: 'hsl(228, 12%, 48%)',
							marginBottom: '-10px',
						}}
					>
						PERFUME
					</Typography.Title>
					<Typography.Title
						level={1}
						style={{
							fontFamily: 'Fraunces',
							fontWeight: '700',
						}}
					>
						Gabrielle Essence Eau De Parfum
					</Typography.Title>
					<Typography.Paragraph
						style={{
							color: 'hsl(228, 12%, 48%)',
							fontSize: '16px',
							fontWeight: 'bold',
						}}
					>
						A floral, solar and voluptuous interpretation composed
						by Olivier Polge, Perfumer-Creator for the House of
						CHANEL.
					</Typography.Paragraph>
					<Flex align="center" gap={'30px'}>
						<Typography.Text
							style={{
								fontSize: '35px',
								fontFamily: 'Fraunces',
								fontWeight: '700',
								color: 'hsl(158, 36%, 37%)',
							}}
						>
							$149.99
						</Typography.Text>
						<Typography.Text
							delete
							style={{
								fontSize: '16px',
								color: 'hsl(228, 12%, 48%)',
							}}
						>
							$169.99
						</Typography.Text>
					</Flex>
					<ConfigProvider
						theme={{
							components: {
								Button: {
									defaultBg: 'hsl(158, 36%, 37%)',
									defaultHoverBg: 'hsl(158, 78%, 18%)',
								},
							},
						}}
					>
						<Button
							block
							size="large"
							style={{
								border: 'none',
								color: 'hsl(0, 0%, 100%)',
								fontWeight: 'bold',
							}}
							icon={
								<ShoppingCartOutlined
									style={{
										fontSize: '20px',
									}}
								/>
							}
						>
							Add to Cart
						</Button>
					</ConfigProvider>
				</Flex>
			</Flex>
		</Card>
	);
}

export default App;
