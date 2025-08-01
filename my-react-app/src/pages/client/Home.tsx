import "antd";
import { Layout, Button, Row, Col, Typography, Rate, Grid } from "antd";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;
import React from "react";

const products = [
  {
    id: 1,
    name: "Luminous Moisturizing Foundation 35ml",
    price: "$18.00",
    img: "https://storage.googleapis.com/a1aa/image/ebc86aa9-4da4-451b-fa2c-65a6f52a5029.jpg",
    alt: "Black tube of Luminous Moisturizing Foundation 35ml",
  },
  {
    id: 2,
    name: "BB Cream 35ml",
    price: "$18.00",
    img: "https://storage.googleapis.com/a1aa/image/4ef203d2-2451-4fbf-56a7-fc53ff2edd81.jpg",
    alt: "Beige tube of BB Cream 35ml",
  },
  {
    id: 3,
    name: "Full coverage liquid concealer 2.3ml",
    price: "$18.00",
    img: "https://storage.googleapis.com/a1aa/image/c14a3229-ca70-46d3-9617-8c0addcea231.jpg",
    alt: "Small bottle of Full coverage liquid concealer 2.3ml with applicator",
  },
];
const Home = () => {
  const screens = useBreakpoint();
  return (
    <Content style={{ maxWidth: 1120, margin: "32px auto", padding: "0 24px" }}>
      <Row
        gutter={[48, 24]}
        style={{
          backgroundColor: "#c3d7dd",
          borderRadius: 24,
          padding: screens.md ? 48 : 32,
          boxShadow: "0 8px 16px rgb(0 0 0 / 0.1)",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: screens.md ? "row" : "column",
        }}
      >
        <Col flex="1 1 400px" style={{ maxWidth: screens.md ? "50%" : "100%" }}>
          <Title
            level={screens.md ? 1 : 2}
            style={{
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 12,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Make Your Skin Shine Naturally
          </Title>
          <Paragraph
            style={{
              fontSize: screens.md ? 16 : 14,
              color: "#374151",
              marginBottom: 24,
              fontFamily: "'Playfair Display', serif",
              maxWidth: 350,
            }}
          >
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eliusmod Tempor Incididunt Ut Labore.
          </Paragraph>
          <Button
            type="primary"
            style={{
              backgroundColor: "#f97316",
              borderColor: "#f97316",
              fontWeight: 600,
              fontSize: 12,
              borderRadius: 6,
              padding: "8px 24px",
              fontFamily: "'Playfair Display', serif",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ea580c")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#f97316")
            }
          >
            See Collection
          </Button>
        </Col>
        <Col flex="0 0 200px" style={{ textAlign: "center" }}>
          <img
            src="https://storage.googleapis.com/a1aa/image/2f333ac6-8e48-44da-097b-a70e85ee1b06.jpg"
            alt="Blue tube of skincare product with sliced lemons and lemon leaves around it"
            style={{ borderRadius: 24, maxWidth: "100%", height: "auto" }}
            width={200}
            height={280}
            loading="lazy"
          />
        </Col>
      </Row>
      <section style={{ textAlign: "center", marginTop: 64, marginBottom: 80 }}>
        <Title
          level={screens.md ? 3 : 4}
          style={{
            fontWeight: 600,
            marginBottom: 8,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Best sales of beauty products.
        </Title>
        <Paragraph
          style={{
            fontSize: screens.md ? 14 : 12,
            color: "#6b7280",
            marginBottom: 48,
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.3,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Taking Care Of Our Customers And Promoting Their Well-Being Is At The
          Heart Of The Mission We Have Given Ourselves.
        </Paragraph>
        <Row
          gutter={[24, 48]}
          justify="center"
          style={{ maxWidth: 960, margin: "0 auto" }}
        >
          {products.map(({ id, name, price, img, alt }) => (
            <Col
              key={id}
              xs={12}
              sm={6}
              md={6}
              lg={6}
              style={{ textAlign: "left" }}
            >
              <img
                src={img}
                alt={alt}
                width={100}
                height={140}
                style={{
                  display: "block",
                  margin: "0 auto 12px",
                  borderRadius: 6,
                  objectFit: "contain",
                }}
                loading="lazy"
              />
              <Rate
                disabled
                defaultValue={5}
                style={{ color: "#fbbf24", fontSize: 12, marginBottom: 4 }}
                aria-label="5 star rating"
              />
              <Title
                level={5}
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  marginBottom: 4,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {name}
              </Title>
              <Text
                style={{
                  color: "#ea580c",
                  fontWeight: 600,
                  fontSize: 12,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {price}
              </Text>
            </Col>
          ))}
        </Row>
      </section>
    </Content>
  );
};

export default Home;
